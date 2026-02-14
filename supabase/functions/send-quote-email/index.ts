import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface QuoteData {
  customer_name: string;
  email: string;
  phone: string;
  service_type: string;
  business_type: string;
  description: string;
  budget_range: string;
}

function validateQuoteData(data: QuoteData): string | null {
  if (!data.customer_name || data.customer_name.trim().length < 2) {
    return "Name must be at least 2 characters";
  }
  if (!data.email || !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(data.email)) {
    return "Valid email is required";
  }
  if (!data.phone || data.phone.trim().length < 7) {
    return "Valid phone number is required";
  }
  if (!data.service_type || data.service_type.trim().length < 2) {
    return "Service type is required";
  }
  if (!data.description || data.description.trim().length < 10) {
    return "Description must be at least 10 characters";
  }
  return null;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const quoteData: QuoteData = await req.json();

    const validationError = validateQuoteData(quoteData);
    if (validationError) {
      return new Response(
        JSON.stringify({ success: false, error: validationError }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase
      .from("quote_requests")
      .insert([{
        customer_name: quoteData.customer_name.trim(),
        email: quoteData.email.trim(),
        phone: quoteData.phone.trim(),
        service_type: quoteData.service_type,
        business_type: quoteData.business_type || "home",
        description: quoteData.description.trim(),
        budget_range: quoteData.budget_range || "",
        status: "pending",
      }]);

    if (dbError) {
      console.error("Database insert error:", dbError);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to save quote request" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      try {
        const emailHtml = `
          <h2>New Quote Request</h2>
          <p><strong>Customer Name:</strong> ${quoteData.customer_name}</p>
          <p><strong>Email:</strong> ${quoteData.email}</p>
          <p><strong>Phone:</strong> ${quoteData.phone}</p>
          <p><strong>Service Type:</strong> ${quoteData.service_type}</p>
          <p><strong>Business Type:</strong> ${quoteData.business_type}</p>
          <p><strong>Budget Range:</strong> ${quoteData.budget_range || "Not specified"}</p>
          <p><strong>Project Description:</strong></p>
          <p>${quoteData.description}</p>
        `;

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "NetSolution IT Services <quotes@netsolution.com>",
            to: ["info@netsolution.com"],
            subject: `New Quote Request: ${quoteData.service_type}`,
            html: emailHtml,
          }),
        });
      } catch (emailError) {
        console.warn("Email notification failed:", emailError);
      }
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

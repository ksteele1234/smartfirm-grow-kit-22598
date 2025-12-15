import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = 'https://services.leadconnectorhq.com/hooks/HWYLT2eSYyS0OaDGKN2O/webhook-trigger/336f6923-4797-4b75-996d-11dba22a2c2c';
    
    const testPayload = {
      email: 'test@example.com',
      client_count: 150,
      avg_fee: 2500,
      calculated_revenue: 37500,
      source: 'calculator-lead-magnet',
      test: true,
      timestamp: new Date().toISOString()
    };

    console.log('Sending test payload to webhook:', testPayload);

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload),
    });

    const responseText = await response.text();
    console.log('Webhook response status:', response.status);
    console.log('Webhook response body:', responseText);

    return new Response(JSON.stringify({
      success: true,
      status: response.status,
      payload_sent: testPayload,
      webhook_response: responseText
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error sending to webhook:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ 
      success: false, 
      error: errorMessage
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

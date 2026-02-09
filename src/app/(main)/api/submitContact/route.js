export async function POST(req) {
  try {
    const data = await req.json();

    // replace with your Google Apps Script Web App URL
    const scriptUrl = "https://script.google.com/macros/s/AKfycbx-fEc6gUTXne3hmbHK-kZEBdwYXaM68dP8SUfDyPHjEFJHx7ZrHpf1g9X2xtg1SOdn/exec";

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ success: false, error: "Failed to send to Google Sheets" }),
        { status: 500 }
      );
    }

    const result = await response.json();
    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
    });
  }
}
// lib/googleCalendar.js
export async function getNextMeeting() {
  const API_KEY = process.env.GOOGLE_API_KEY;
  const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

  // The API URL to get the next single event, ordered by start time
  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${new Date().toISOString()}&singleEvents=true&orderBy=startTime&maxResults=1`;

  try {
    const response = await fetch(url, { next: { revalidate: 60 } }); // Re-fetch every 60 seconds
    if (!response.ok) {
      throw new Error("Failed to fetch events from Google Calendar API");
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return null; // No upcoming events found
    }

    const nextEvent = data.items[0];

    // Formats the data into a clean object
    return {
      summary: nextEvent.summary,
      location: nextEvent.location,
      // Formats start time to be more readable
      start: new Date(
        nextEvent.start.dateTime || nextEvent.start.date
      ).toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      }),
    };
  } catch (error) {
    console.error("Error fetching next meeting:", error);
    return null;
  }
}

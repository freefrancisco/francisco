import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    // Define the path to the PDF file in the private directory
    const filePath = './private/resume.pdf';

    try {
      // Read the PDF file from the file system
      const fileContents = await Deno.readFile(filePath);

      // Return the PDF file as a response
      return new Response(fileContents, {
        headers: {
          "Content-Type": "application/pdf",
        },
      });
    } catch (_error) {
      // Handle errors, such as the file not being found
      return new Response("PDF not found", { status: 404 });
    }
  },
};

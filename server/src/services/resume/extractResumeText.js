import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import mammoth from "mammoth";

export async function extractResumeText(file) {
  if (file.mimetype === "application/pdf") {
    const loadingTask = pdfjsLib.getDocument({
      data: new Uint8Array(file.buffer),
    });

    const pdf = await loadingTask.promise;

    let text = "";

    for (let page = 1; page <= pdf.numPages; page++) {
      const currentPage = await pdf.getPage(page);

      const content = await currentPage.getTextContent();

      text +=
        content.items
          .map((item) => item.str)
          .join(" ") + "\n";
    }

    return text;
  }

  if (
    file.mimetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    const result = await mammoth.extractRawText({
      buffer: file.buffer,
    });

    return result.value;
  }

  throw new Error("Unsupported file format");
}
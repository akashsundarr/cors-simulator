export function containsCORS(code) {
let hasImport = false;
  let hasActiveCORS = false;

  const lines = code.split("\n");

  for (let line of lines) {
    const trimmed = line.trim();

    // Check for active import
    if (
      trimmed.includes("from flask_cors import CORS") ||
      trimmed.includes("import flask_cors")
    ) {
      if (!trimmed.startsWith("#")) {
        hasImport = true;
      }
    }

    // Check for active CORS(app)
    if (trimmed.includes("CORS(app)") || trimmed.includes("CORS(")) {
      if (!trimmed.startsWith("#")) {
        hasActiveCORS = true;
      }
    }
  }

  // Return true only if BOTH are active (not commented out)
  return hasImport && hasActiveCORS;
}

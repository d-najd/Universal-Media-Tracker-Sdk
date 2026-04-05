import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { glob } from 'glob' // npm install glob --save-dev

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ---------- CONFIGURATION ----------
const srcDir = path.join(__dirname, '../src') // source folder
const outputFile = path.join(srcDir, 'index.ts') // generated barrel file
const excludePatterns = [
	'**/*.test.ts',
	'**/*.spec.ts',
	'**/*.d.ts', // exclude tests & declaration files
	'**/index.ts', // exclude existing index
	'**/__tests__/**' // exclude test folders
]
const useFileNameAsExportName = true // use filename (without ext) as export name
const includeNamedExports = true // also export * for files with named exports
// -----------------------------------

// Convert file path to a valid identifier (camelCase)
function toIdentifier(filePath) {
	const baseName = path.basename(filePath, path.extname(filePath))
	return baseName.replace(/[-_]([a-z])/g, (_, c) => c.toUpperCase())
}

// Check if content contains a default export
function hasDefaultExport(content) {
	// Simple regex – adjust if needed
	return /\bexport\s+default\b/.test(content)
}

// Check if content contains any named export (excluding default)
function hasNamedExport(content) {
	const namedExportRegex =
		/\bexport\s+(?!default\b)(?:{|\*|const|let|var|function|class|interface|type|enum)\b/
	return namedExportRegex.test(content)
}

async function main() {
	// Find all TypeScript source files
	const files = await glob(`${srcDir}/**/*.{ts,tsx}`, {
		ignore: excludePatterns
	})
	console.log(`Found ${files.length} files.`)

	const lines = ['// Auto‑generated barrel file – do not edit manually', '']

	for (const file of files) {
		const relativePath = path.relative(srcDir, file)
		const importPath =
			'./' + relativePath.replace(/\\/g, '/').replace(/\.tsx?$/, '')
		const content = fs.readFileSync(file, 'utf-8')

		const hasDefault = hasDefaultExport(content)
		const hasNamed = hasNamedExport(content)

		if (hasDefault) {
			const exportName = useFileNameAsExportName
				? toIdentifier(relativePath)
				: 'default'
			lines.push(
				`export { default as ${exportName} } from '${importPath}';`
			)
		}

		if (includeNamedExports && hasNamed) {
			lines.push(`export * from '${importPath}';`)
		}
	}

	fs.writeFileSync(outputFile, lines.join('\n'), 'utf-8')
	console.log(`Generated ${outputFile}`)
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})

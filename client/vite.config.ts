import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': '/src'
		}
	},
	// TODO: Костыль для сторибука, надо позже найти решение
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/styles/global.scss";'
			}
		}
	},
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		strictPort: true,
		port: 25555,
	},
})

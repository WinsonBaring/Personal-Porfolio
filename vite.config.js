import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import reactRefresh from '@vitejs/plugin-react-refresh'

const fileNames = [
  'apis',
  'assets',
  'sections',
  'components',
  'data',
  'hocs',
  'hooks',
  'layout',
  'pages',
  'src',
];

// this will generate aliases for fileNames
const filePaths = fileNames.reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: `/${cur === 'src' ? cur : 'src/' + cur}`
  }),
  ''
);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      ... filePaths
    }
  },
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 5173
  }
})

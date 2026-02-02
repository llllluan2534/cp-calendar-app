# Migrate to Vite

Migrate the React application from Create React App (CRA) to Vite for faster build times and better development experience.

## Proposed Changes

### client

#### [MODIFY] [package.json](file:///d:/GitHub/cp-calendar-app/client/package.json)
- Remove `react-scripts`.
- Add `vite`, `@vitejs/plugin-react`.
- Update scripts:
    - `start` -> `vite`
    - `build` -> `vite build`
    - `serve` -> `vite preview`

#### [NEW] [vite.config.js](file:///d:/GitHub/cp-calendar-app/client/vite.config.js)
- Create Vite configuration file with React plugin.

#### [MOVE & MODIFY] [index.html](file:///d:/GitHub/cp-calendar-app/client/index.html)
- Move from `public/index.html` to `client/index.html`.
- Add script tag pointing to `/src/index.js`.
- Remove `%PUBLIC_URL%` references.

#### [RENAME] Source Files
- Rename `src/App.js` to `src/App.jsx`.
- Rename `src/index.js` to `src/index.jsx`.
- Rename `src/reportWebVitals.js` to `src/reportWebVitals.js` (no JSX).
- Rename `src/pages/Home.jsx` (Already JSX).

## Verification Plan

### Manual Verification
- Run `npm start` (which runs `vite`) and verify the app loads.
- Check that hot module replacement works.
- Run `npm run build` to verify production build.


export type TogglerProps = {
  theme?: 'light' | 'dark',
  values?: {
    left: string,
    right: string,
    current?: string,
  },
  valuesLocale?: {
    left: string | JSX.Element,
    right: string | JSX.Element,
  },
  onClick?: (v: string | null) => void,
}

export type TogglerTheme = {
  theme: {
    theme: 'dark' | 'light',
  },
};
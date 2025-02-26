import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)']
      },
      fontSize: {
        'title-2xlb': ['40px', { lineHeight: '135%', fontWeight: '700' }],
        'title-xlb': ['24px', { lineHeight: '135%', fontWeight: '700' }],
        'title-lb': ['20px', { lineHeight: '135%', fontWeight: '700' }],
        'title-mb': ['16px', { lineHeight: '135%', fontWeight: '700' }],
        'title-sb': ['12px', { lineHeight: '135%', fontWeight: '700' }],
        'body-lm': ['24px', { lineHeight: '150%', fontWeight: '500' }],
        'body-mm': ['16px', { lineHeight: '150%', fontWeight: '500' }],
        'body-sm': ['12px', { lineHeight: '150%', fontWeight: '500' }],
        'label-xlb': ['20px', { lineHeight: '150%', fontWeight: '700' }],
        'label-xlm': ['20px', { lineHeight: '150%', fontWeight: '500' }],
        'label-lb': ['16px', { lineHeight: '150%', fontWeight: '700' }],
        'label-lm': ['16px', { lineHeight: '150%', fontWeight: '500' }],
        'label-mb': ['12px', { lineHeight: '150%', fontWeight: '700' }],
        'label-mm': ['12px', { lineHeight: '150%', fontWeight: '500' }],
        'label-sb': ['10px', { lineHeight: '150%', fontWeight: '700' }],
        'label-sm': ['10px', { lineHeight: '150%', fontWeight: '500' }],
        'caption-lm': ['16px', { lineHeight: '150%', fontWeight: '500' }],
        'caption-mm': ['12px', { lineHeight: '150%', fontWeight: '500' }],
        'caption-sm': ['10px', { lineHeight: '150%', fontWeight: '500' }]
      },
      colors: {
        'gray-100': 'var(--gray-100)',
        'gray-200': 'var(--gray-200)',
        'gray-300': 'var(--gray-300)',
        'gray-400': 'var(--gray-400)',
        'gray-500': 'var(--gray-500)',
        'gray-600': 'var(--gray-600)',
        'gray-700': 'var(--gray-700)',
        'gray-800': 'var(--gray-800)',
        'gray-900': 'var(--gray-900)',
        red: 'var(--red)',
        yellow: 'var(--yellow)'
      }
    }
  },
  plugins: []
};
export default config;

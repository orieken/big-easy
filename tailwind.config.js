/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundColor: {
                gold: '#FFD700',
            },
            textColor: {
                gold: '#FFD700',
                'gold-300': '#D4AF37',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                glow: '0 0 10px #A855F7', // Normal state (light purple glow)
                hover: '0 0 20px #A855F7' // Hover state (more intense light purple glow)
            },
        },
    },
    variants: {
        extend: {
            boxShadow: ['hover']
        }
    },
    plugins: [],
}

import React, { useEffect, useRef } from 'react';

const BinaryRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const binary = '01';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * canvas.height;
        }

        function draw() {
            // Semi-transparent black to create fade effect
            ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#6366f1';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = binary.charAt(Math.floor(Math.random() * binary.length));
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Add gradient effect
                const gradient = ctx.createLinearGradient(x, y - 20, x, y);
                gradient.addColorStop(0, 'rgba(99, 102, 241, 0.1)');
                gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.6)');
                gradient.addColorStop(1, 'rgba(99, 102, 241, 1)');
                ctx.fillStyle = gradient;

                ctx.fillText(text, x, y);

                // Reset drop to top randomly
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -3,
                opacity: 0.15
            }}
        />
    );
};

export default BinaryRain;

import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 flex items-center justify-center p-4">
            {/* Glass Card */}
            <div className="glass-card p-8 max-w-md w-full text-center">
                <h1 className="text-4xl font-bold mb-4">💕 Couples Calendar</h1>
                <p className="text-lg mb-8 opacity-90">
                    Track your love story together
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                    <button className="glass-btn flex-1">Login</button>
                    <button className="glass-btn flex-1">Register</button>
                </div>

                {/* Counter Preview */}
                <div className="mt-8 glass-card p-6">
                    <h2 className="text-2xl font-bold">Days</h2>
                    <p className="text-5xl font-bold mt-4">0</p>
                </div>
            </div>
        </div>
    );
}
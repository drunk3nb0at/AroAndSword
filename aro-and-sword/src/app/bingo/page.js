'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Bingo from '../components/Bingo';
import Footer from '../components/Footer';

export default function BingoPage() {
	return (
		<div className="app">
			<Navbar />
			<main className="bingo-page">
				<Bingo />
			</main>
		</div>
	);
}

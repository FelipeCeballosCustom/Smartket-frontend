import React from "react";
import "./Home.css";
import { House, MagnifyingGlass, Plus } from 'phosphor-react';
import {
    ShoppingCart,
    TShirt,
    PawPrint,
    CreditCard,
    Lightbulb,
    Car,
    Coin
} from "phosphor-react";

const categories = [
    {
        name: "Mercado", icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1.5" /><circle cx="19" cy="21" r="1.5" /><path d="M2.5 4h2l2.68 13.39A2 2 0 0 0 9.13 19h7.74a2 2 0 0 0 1.95-1.61L21.5 7h-16" /></svg>
        )
    },
    {
        name: "Ropa", icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l8 8 8-8" /><path d="M2 20h20" /><path d="M6 20V8.5" /><path d="M18 20V8.5" /></svg>
        )
    },
    {
        name: "Mascotas", icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><circle cx="4.5" cy="9.5" r="2.5" /><circle cx="19.5" cy="9.5" r="2.5" /><circle cx="7.5" cy="19.5" r="2.5" /><circle cx="16.5" cy="19.5" r="2.5" /></svg>
        )
    },
    {
        name: "Hogar", icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 4l9 5.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z" /><path d="M9 22V12h6v10" /></svg>
        )
    },
    {
        name: "Deudas", icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="8" rx="9" ry="4" /><path d="M3 8v8c0 2.21 4.03 4 9 4s9-1.79 9-4V8" /></svg>
        )
    },
    {
        name: "Servicios", icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 3" /></svg>
        )
    },
    {
        name: "Transporte", icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="6" rx="2" /><path d="M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" /><circle cx="7.5" cy="19.5" r="1.5" /><circle cx="16.5" cy="19.5" r="1.5" /></svg>
        )
    },
    {
        name: "Ahorros", icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="8" ry="5" /><path d="M4 12v2c0 2.21 3.58 4 8 4s8-1.79 8-4v-2" /><path d="M12 8v4" /></svg>
        )
    },
];

const tabs = ["Mercado", "Hogar", "Ropa", "Mascotas", "Deudas"];

const Home = () => {
    return (
        <div className="home-screen">
            <div className="home-content">
                <div className="home-search">
                    <MagnifyingGlass size={20} color="#9ca3af" />
                    <input className="home-search-text" placeholder=" Encuentra categoría" />
                </div>

                <div className="home-tabs">
                    {tabs.map(tab => (
                        <button className="home-tab" key={tab}>{tab}</button>
                    ))}
                </div>
                <div className="home-actions">
                    <button className="home-action-scan">Escanear <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><circle cx="12" cy="13.5" r="3.5" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg></button>
                    <button className="home-action-add">Agregar <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></svg></button>
                </div>
                <div className="home-grid">
                    {categories.map(cat => (
                        <div className="home-category" key={cat.name}>
                            {cat.icon}
                            <span className="home-category-label">{cat.name}</span>
                            <span className="home-category-dot"></span>
                        </div>
                    ))}
                </div>
            </div>
            <nav className="home-navbar">
                <button className="home-navbar-item">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" /><rect x="7" y="13" width="10" height="7" rx="2" /></svg>
                    <span>Gráficas</span>
                </button>
                <button className="home-navbar-item">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><circle cx="12" cy="13.5" r="3.5" /></svg>
                    <span>Inventario</span>
                </button>
                <button className="home-navbar-item">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                    <span>Favoritos</span>
                </button>
            </nav>
        </div>
    );
};

export default Home;
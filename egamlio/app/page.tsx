"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Banner from '@/components/home1/Banner';
import About from '@/components/home1/About';
import Features from '@/components/home1/Features';
import Games from '@/components/home1/Games';
import HowWorks from '@/components/home1/HowWorks';
import Community from '@/components/home1/Community';
import CallAction from '@/components/home1/CallAction';
import Faq from '@/components/home1/Faq';

const Home: React.FC = () => {
    const [user, setUser] = useState<{ firstName: string; lastName: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const user = sessionStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
            setLoading(false);
        } else {
            router.push('/login');
        }
    }, [router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {user && (
                <h1 className="display-3 text-center text-white" style={{
                    background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    marginTop: '0',
                    marginBottom: '0',
                    padding: '1rem 0'
                }}>
                    Welcome, {user.firstName} {user.lastName}
                </h1>
            )}
            <Banner />
            <About />
            <Features />
            <Games />
            <HowWorks />
            <Community />
            <CallAction />
            <Faq />
        </>
    );
};

export default Home;

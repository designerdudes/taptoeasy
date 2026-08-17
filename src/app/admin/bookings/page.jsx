'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
    Phone, 
    Calendar, 
    MapPin, 
    ShieldCheck, 
    Search, 
    Download, 
    RefreshCw, 
    ArrowLeft, 
    Clock,
    User,
    Lock,
    LogOut,
    Eye,
    EyeOff,
    CheckCircle2,
    AlertCircle,
    MessageCircle
} from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/data/products';

export default function AdminBookingsPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [filterProduct, setFilterProduct] = useState('all');

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginLoading(true);
        setLoginError('');

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: passwordInput }),
            });

            if (res.ok) {
                const data = await res.json();
                sessionStorage.setItem('tte_admin_auth', data.token || 'authenticated');
                setIsAuthenticated(true);
                setPasswordInput('');
                fetchBookings(data.token);
            } else {
                const data = await res.json().catch(() => ({}));
                setLoginError(data.error || 'Incorrect admin password.');
            }
        } catch (err) {
            setLoginError('Authentication failed. Please try again.');
        } finally {
            setLoginLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await fetch('/api/admin/logout', { method: 'POST' });
        } catch (_) {}
        sessionStorage.removeItem('tte_admin_auth');
        setIsAuthenticated(false);
        setBookings([]);
    };

    const fetchBookings = async (tokenOverride) => {
        setLoading(true);
        const token = tokenOverride || sessionStorage.getItem('tte_admin_auth');

        try {
            const res = await fetch('/api/bookings', {
                headers: token ? { Authorization: `Bearer ${token}` } : {},
            });

            if (res.status === 401) {
                setIsAuthenticated(false);
                sessionStorage.removeItem('tte_admin_auth');
                return;
            }

            const data = await res.json();
            if (data?.bookings) {
                setBookings(data.bookings);
                setIsAuthenticated(true);
            }
        } catch (err) {
            console.error('Failed to load bookings:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = sessionStorage.getItem('tte_admin_auth');
        if (token) {
            fetchBookings(token);
        }
    }, []);

    const filteredBookings = bookings.filter((b) => {
        const matchesSearch =
            (b.name || '').toLowerCase().includes(search.toLowerCase()) ||
            (b.phone || '').includes(search) ||
            (b.city || '').toLowerCase().includes(search.toLowerCase()) ||
            (b.address || '').toLowerCase().includes(search.toLowerCase());

        const matchesProduct =
            filterProduct === 'all' || (b.product || '').toLowerCase().includes(filterProduct.toLowerCase());

        return matchesSearch && matchesProduct;
    });

    const exportToCSV = () => {
        const headers = ['ID', 'Date', 'Customer Name', 'Phone', 'Service', 'Locality', 'Address', 'Preferred Date', 'Notes'];
        const rows = filteredBookings.map((b) => [
            b.id || '',
            b.created || '',
            `"${b.name || ''}"`,
            `"${b.phone || ''}"`,
            `"${b.product || ''}"`,
            `"${b.city || ''}"`,
            `"${b.address || ''}"`,
            `"${b.preferred_date || ''}"`,
            `"${(b.notes || '').replace(/"/g, '""')}"`,
        ]);

        const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `taptoeasy_free_bookings_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // If not authenticated, show secure Login Portal
    if (!isAuthenticated) {
        return (
            <div className="flex min-h-[85vh] items-center justify-center px-5 py-16 bg-background">
                <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-[0_24px_60px_-30px_rgba(37,99,235,0.3)] sm:p-10">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Lock className="h-7 w-7" strokeWidth={1.8} />
                    </div>

                    <div className="mt-5 text-center">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                            Admin Portal
                        </span>
                        <h1 className="font-display mt-2 text-2xl font-bold text-foreground">
                            Sign In to View Bookings
                        </h1>
                        <p className="mt-1 text-xs text-muted-foreground">
                            Enter the secure administrator password to view Hyderabad customer leads.
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="mt-8 space-y-4">
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                                Admin Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={passwordInput}
                                    onChange={(e) => setPasswordInput(e.target.value)}
                                    placeholder="Enter password..."
                                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/50 pr-11"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        {loginError && (
                            <div className="flex items-center gap-2 rounded-xl bg-destructive/10 p-3 text-xs font-medium text-destructive">
                                <AlertCircle className="h-4 w-4 shrink-0" />
                                {loginError}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loginLoading}
                            className="flex w-full min-h-[46px] items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-sm transition hover:bg-primary/90 active:scale-[0.98] disabled:opacity-50"
                        >
                            {loginLoading ? (
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                            ) : (
                                <>
                                    <ShieldCheck className="h-4 w-4" /> Unlock Admin Dashboard
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 border-t border-border pt-4 text-center">
                        <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition">
                            <ArrowLeft className="h-3.5 w-3.5" /> Back to Tap to Easy Website
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Authenticated Dashboard
    return (
        <div className="min-h-screen bg-background text-foreground py-10 px-4 sm:px-6">
            <div className="mx-auto max-w-[80rem]">
                {/* Top header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-6">
                    <div>
                        <div className="flex items-center gap-2">
                            <Link href="/" className="text-xs font-semibold text-muted-foreground hover:text-primary flex items-center gap-1">
                                <ArrowLeft className="h-3.5 w-3.5" /> Back to Website
                            </Link>
                            <span className="text-muted-foreground/40">•</span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-600/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                                <ShieldCheck className="h-3.5 w-3.5" /> Secure Session
                            </span>
                        </div>
                        <h1 className="font-display mt-2 text-2xl sm:text-3xl font-extrabold text-foreground">
                            Customer Leads & Sizing Requests
                        </h1>
                        <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                            All free measurement and installation requests across Hyderabad.
                        </p>
                    </div>

                    <div className="flex items-center gap-2.5">
                        <button
                            onClick={() => fetchBookings()}
                            className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold text-foreground transition hover:bg-secondary active:scale-[0.98]"
                        >
                            <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} /> Refresh
                        </button>
                        <button
                            onClick={exportToCSV}
                            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 active:scale-[0.98]"
                        >
                            <Download className="h-3.5 w-3.5" /> Export CSV
                        </button>
                        <button
                            onClick={handleLogout}
                            title="Sign out"
                            className="flex items-center gap-1.5 rounded-full border border-destructive/30 bg-destructive/10 px-3.5 py-2 text-xs font-semibold text-destructive transition hover:bg-destructive hover:text-destructive-foreground active:scale-[0.98]"
                        >
                            <LogOut className="h-3.5 w-3.5" /> Logout
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
                    <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by customer name, phone, locality, or address..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
                        />
                    </div>

                    <select
                        value={filterProduct}
                        onChange={(e) => setFilterProduct(e.target.value)}
                        className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
                    >
                        <option value="all">All Services</option>
                        <option value="cloth">Cloth Hangers</option>
                        <option value="grill">Invisible Grills</option>
                        <option value="shoe">Shoe Racks</option>
                        <option value="mesh">Mosquito Mesh</option>
                    </select>
                </div>

                {/* Bookings List */}
                <div className="mt-6">
                    {loading ? (
                        <div className="rounded-3xl border border-border bg-card p-12 text-center">
                            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent mx-auto" />
                            <p className="mt-3 text-sm text-muted-foreground">Loading booking data…</p>
                        </div>
                    ) : filteredBookings.length === 0 ? (
                        <div className="rounded-3xl border border-border bg-card p-12 text-center">
                            <User className="h-10 w-10 text-muted-foreground mx-auto" />
                            <h3 className="font-display mt-3 text-lg font-bold">No bookings found</h3>
                            <p className="mt-1 text-xs text-muted-foreground">
                                {search ? 'Try adjusting your search query.' : 'New customer bookings placed on the website will appear here automatically.'}
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {filteredBookings.map((booking) => {
                                const cleanPhone = (booking.phone || '').replace(/\D/g, '');
                                const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hi ${booking.name}, Tap to Easy Hyderabad here regarding your free ${booking.product} site visit booking!`)}`;

                                return (
                                    <div
                                        key={booking.id || booking.created}
                                        className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md"
                                    >
                                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                            <div className="space-y-1.5">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span className="font-display text-lg font-bold text-foreground">
                                                        {booking.name}
                                                    </span>
                                                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                                                        {booking.product || 'Balcony Service'}
                                                    </span>
                                                    <span className="rounded-full bg-emerald-50 border border-emerald-600/20 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                                                        Free Site Visit
                                                    </span>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-muted-foreground">
                                                    <span className="flex items-center gap-1.5 text-foreground font-semibold">
                                                        <Phone className="h-3.5 w-3.5 text-primary" /> {booking.phone}
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <MapPin className="h-3.5 w-3.5 text-primary" /> {booking.city || 'Hyderabad'}
                                                    </span>
                                                    {booking.preferred_date && (
                                                        <span className="flex items-center gap-1.5">
                                                            <Calendar className="h-3.5 w-3.5 text-primary" /> Pref. Date: {booking.preferred_date}
                                                        </span>
                                                    )}
                                                    {booking.created && (
                                                        <span className="flex items-center gap-1.5 text-[11px]">
                                                            <Clock className="h-3 w-3" /> Booked: {new Date(booking.created).toLocaleString('en-IN')}
                                                        </span>
                                                    )}
                                                </div>

                                                {booking.address && (
                                                    <p className="text-xs text-foreground/80 pt-1">
                                                        <strong className="text-foreground">Address:</strong> {booking.address}
                                                    </p>
                                                )}

                                                {booking.notes && (
                                                    <p className="text-xs text-muted-foreground bg-secondary/50 p-2.5 rounded-xl mt-2 border border-border/60">
                                                        <strong>Balcony details:</strong> {booking.notes}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-border">
                                                <a
                                                    href={`tel:${booking.phone}`}
                                                    className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary/90"
                                                >
                                                    <Phone className="h-3.5 w-3.5" /> Call
                                                </a>
                                                {cleanPhone && (
                                                    <a
                                                        href={waUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-600"
                                                    >
                                                        <MessageCircle className="h-3.5 w-3.5 fill-white" /> WhatsApp
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

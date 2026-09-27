'use client';

import React from 'react';

/**
 * SizeSelector
 *
 * Reusable size chip selector for hanger sizes and other variant selectors.
 *
 * Props:
 * - sizes: string[]          All size options to display
 * - selected: string | null  Currently selected size
 * - onChange: (size) => void Called when a size is clicked
 * - disabled?: string[]      Sizes that are unavailable (greyed out, not clickable)
 * - label?: string           Label shown above the chips (default: "Size")
 * - groupLabel?: boolean     Whether to show Small/Medium/Large group labels
 * - groups?: { small: string[], medium: string[], large: string[] }
 *
 * Visual states:
 * - Selected: filled primary background
 * - Available: outlined border, hover highlight
 * - Disabled: muted, not clickable, cursor-not-allowed
 */
export default function SizeSelector({
    sizes = [],
    selected = null,
    onChange,
    disabled = [],
    label = 'Size',
    groupLabel = false,
    groups = null,
}) {
    if (!sizes || sizes.length === 0) return null;

    const renderChip = (size) => {
        const isSelected = selected === size;
        const isDisabled = disabled.includes(size);

        return (
            <button
                key={size}
                type="button"
                disabled={isDisabled}
                onClick={() => !isDisabled && onChange?.(size)}
                aria-pressed={isSelected}
                aria-disabled={isDisabled}
                className={`min-w-[3.5rem] rounded-xl border px-3.5 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                    isSelected
                        ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                        : isDisabled
                        ? 'cursor-not-allowed border-border bg-secondary/30 text-muted-foreground/50'
                        : 'border-border bg-background text-foreground hover:border-primary/60 hover:bg-primary/5'
                }`}
            >
                {size}
            </button>
        );
    };

    if (groupLabel && groups) {
        const groupDefs = [
            { key: 'small', label: 'Small', sizes: groups.small || [] },
            { key: 'medium', label: 'Medium', sizes: groups.medium || [] },
            { key: 'large', label: 'Large', sizes: groups.large || [] },
        ].filter((g) => g.sizes.length > 0);

        return (
            <div className="space-y-3">
                {label && (
                    <p className="text-sm font-bold text-foreground">
                        {label}
                        {selected && (
                            <span className="ml-2 font-normal text-primary">{selected}</span>
                        )}
                    </p>
                )}
                {groupDefs.map((group) => (
                    <div key={group.key} className="flex flex-wrap items-center gap-2">
                        <span className="w-16 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {group.label}
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {group.sizes.map(renderChip)}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="space-y-2">
            {label && (
                <p className="text-sm font-bold text-foreground">
                    {label}
                    {selected && (
                        <span className="ml-2 font-normal text-primary">{selected}</span>
                    )}
                </p>
            )}
            <div className="flex flex-wrap gap-2">{sizes.map(renderChip)}</div>
        </div>
    );
}

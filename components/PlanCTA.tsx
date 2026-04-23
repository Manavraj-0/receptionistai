'use client';

interface PlanCTAProps {
  plan: string;
  className: string;
  children: React.ReactNode;
}

export default function PlanCTA({ plan, className, children }: PlanCTAProps) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();

    // Dispatch custom event with plan name
    window.dispatchEvent(new CustomEvent('selectPlan', { detail: { plan } }));

    // Scroll to the contact form
    const form = document.getElementById('get-started-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}

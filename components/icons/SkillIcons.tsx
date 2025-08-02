
import React from 'react';

const iconProps = {
  className: "w-12 h-12",
  strokeWidth: 1.5
};

export const RoutingIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-4m0 0V3m0 14h-4m4 0h4m-4-7H8m4 0h4m-4-7H8m4 0h4m4 14v-4m0 0V3m0 14h-4m4 0h4M4 21v-4m0 0V3m0 14h4m-4 0H0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 13.5h19m-19-6h19"/>
  </svg>
);

export const SwitchingIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h18m-1.5-9L21 3m0 0L16.5 7.5M21 3H3" />
    </svg>
);

export const FiberIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75H19.5M8.25 3.75V19.5M8.25 3.75C5.463 3.75 3.75 5.463 3.75 8.25V19.5C3.75 19.5 3.75 19.5 3.75 19.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 12H19.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 19.5H19.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25V15.75" />
    </svg>
);

export const LteIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a8.967 8.967 0 00-1.12 3.163m1.12-3.163l1.838-1.838m-1.838 1.838a8.967 8.967 0 01-1.12 3.163m0 0L6.03 21m2.258-2.798A8.967 8.967 0 015.25 15.038m-1.12 3.163L1.5 21m2.258-2.798a8.967 8.967 0 00-1.12-3.163m1.12 3.163l1.838 1.838m-1.838-1.838a8.967 8.967 0 011.12-3.163m0 0L6.03 12m2.258 2.798A8.967 8.967 0 019.75 15.038m-1.12-3.163L11.25 9m2.258 2.798A8.967 8.967 0 0014.25 15.038m-1.12-3.163L16.5 9m2.258 2.798A8.967 8.967 0 0118.75 15.038m-1.12-3.163L21 12m-2.258 2.798a8.967 8.967 0 001.12 3.163m-1.12-3.163l-1.838-1.838m1.838-1.838a8.967 8.967 0 011.12-3.163m0 0L18.75 9m-2.258 2.798A8.967 8.967 0 0115.75 15.038m1.12-3.163L13.5 9" />
    </svg>
);

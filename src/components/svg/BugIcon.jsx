const BugIcon = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z"
      fill="#E3F5FF"
    />
    <path
      d="M17 13H18C18.1326 13 18.2598 12.9474 18.3536 12.8536C18.4473 12.7598 18.5 12.6326 18.5 12.5C18.5 12.3674 18.4473 12.2402 18.3536 12.1465C18.2598 12.0527 18.1326 12 18 12H17V11H18C18.1326 11 18.2598 10.9474 18.3536 10.8536C18.4473 10.7598 18.5 10.6326 18.5 10.5C18.5 10.3674 18.4473 10.2402 18.3536 10.1465C18.2598 10.0527 18.1326 10 18 10H16.975C16.8646 8.90263 16.3933 7.87283 15.635 7.07191L16.8538 5.85378C16.9002 5.80733 16.9371 5.75218 16.9622 5.69148C16.9873 5.63079 17.0003 5.56573 17.0003 5.50003C17.0003 5.43434 16.9873 5.36928 16.9622 5.30859C16.9371 5.24789 16.9002 5.19274 16.8538 5.14628C16.8073 5.09983 16.7521 5.06298 16.6914 5.03784C16.6308 5.0127 16.5657 4.99976 16.5 4.99976C16.4343 4.99976 16.3692 5.0127 16.3086 5.03784C16.2479 5.06298 16.1927 5.09983 16.1462 5.14628L14.8781 6.41503C14.0365 5.81967 13.0309 5.49996 12 5.49996C10.9691 5.49996 9.96351 5.81967 9.12187 6.41503L7.85375 5.14628C7.75993 5.05246 7.63268 4.99976 7.5 4.99976C7.36732 4.99976 7.24007 5.05246 7.14625 5.14628C7.05243 5.2401 6.99972 5.36735 6.99972 5.50003C6.99972 5.63272 7.05243 5.75996 7.14625 5.85378L8.365 7.07191C7.6067 7.87283 7.13544 8.90263 7.025 10H6C5.86739 10 5.74021 10.0527 5.64645 10.1465C5.55268 10.2402 5.5 10.3674 5.5 10.5C5.5 10.6326 5.55268 10.7598 5.64645 10.8536C5.74021 10.9474 5.86739 11 6 11H7V12H6C5.86739 12 5.74021 12.0527 5.64645 12.1465C5.55268 12.2402 5.5 12.3674 5.5 12.5C5.5 12.6326 5.55268 12.7598 5.64645 12.8536C5.74021 12.9474 5.86739 13 6 13H7V13.5C7 13.6688 7.00875 13.8357 7.025 14H6C5.86739 14 5.74021 14.0527 5.64645 14.1465C5.55268 14.2402 5.5 14.3674 5.5 14.5C5.5 14.6326 5.55268 14.7598 5.64645 14.8536C5.74021 14.9474 5.86739 15 6 15H7.23C7.54904 16.0152 8.18366 16.9022 9.04155 17.5318C9.89944 18.1615 10.9358 18.501 12 18.501C13.0642 18.501 14.1006 18.1615 14.9584 17.5318C15.8163 16.9022 16.451 16.0152 16.77 15H18C18.1326 15 18.2598 14.9474 18.3536 14.8536C18.4473 14.7598 18.5 14.6326 18.5 14.5C18.5 14.3674 18.4473 14.2402 18.3536 14.1465C18.2598 14.0527 18.1326 14 18 14H16.975C16.9913 13.8357 17 13.6688 17 13.5V13ZM12 6.50003C12.9738 6.50125 13.9138 6.85728 14.6441 7.5015C15.3744 8.14572 15.8448 9.03398 15.9675 10H8.03C8.15271 9.03355 8.62356 8.14495 9.35435 7.50067C10.0851 6.8564 11.0258 6.50064 12 6.50003ZM12.5 17.4675V12.5C12.5 12.3674 12.4473 12.2402 12.3536 12.1465C12.2598 12.0527 12.1326 12 12 12C11.8674 12 11.7402 12.0527 11.6464 12.1465C11.5527 12.2402 11.5 12.3674 11.5 12.5V17.4675C10.5339 17.3449 9.64568 16.8744 9.00146 16.1441C8.35724 15.4138 8.00121 14.4738 8 13.5V11H16V13.5C15.9988 14.4738 15.6428 15.4138 14.9985 16.1441C14.3543 16.8744 13.4661 17.3449 12.5 17.4675Z"
      fill="#1C1C1C"
    />
  </svg>
);
export default BugIcon;

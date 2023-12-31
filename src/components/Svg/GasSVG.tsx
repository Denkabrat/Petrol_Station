import { Props } from "../../interfaces/interfaces";

export const GasSVG = ({ id }: Props) => {
  switch (id) {
    case "gas":
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="gas_station_icon 1" clipPath="url(#clip0_1_193)">
            <g id="Group">
              <path
                id="Vector"
                d="M3.75 0C2.38662 0 1.25 1.13662 1.25 2.5V28.75C1.25007 29.4403 1.80967 29.9999 2.5 30H17.5C18.1903 29.9999 18.7499 29.4403 18.75 28.75V23.125C18.75 22.7798 19.0298 22.5 19.375 22.5H20C20.7052 22.5 21.25 23.0448 21.25 23.75V25C21.25 27.0563 22.9438 28.75 25 28.75C27.0563 28.75 28.75 27.0563 28.75 25V8.75C28.75 7.57075 28.1944 6.45706 27.251 5.74951L23.2495 2.74902C22.6388 2.29109 21.8582 2.51259 21.499 3.00049C21.0895 3.55675 21.1974 4.33718 21.7505 4.75097L23.2495 5.87402C23.5648 6.11016 23.7503 6.48111 23.75 6.875V10C23.75 11.153 24.5589 12.1419 25.6323 12.4219C25.9656 12.5088 26.25 12.7798 26.25 13.125V25C26.25 25.7051 25.7052 26.25 25 26.25C24.2949 26.25 23.75 25.7051 23.75 25V23.75C23.75 21.6937 22.0563 20 20 20H19.375C19.0298 20 18.75 19.7202 18.75 19.375V2.5C18.75 1.13662 17.6134 3.75e-08 16.25 3.75e-08L3.75 0ZM4.375 2.5H15.625C15.9713 2.5 16.25 2.77875 16.25 3.125V11.875C16.25 12.2212 15.9713 12.5 15.625 12.5H4.375C4.02875 12.5 3.75 12.2212 3.75 11.875V3.125C3.75 2.77875 4.02875 2.5 4.375 2.5Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_193">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case "close":
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="close 1" clipPath="url(#clip0_1_164)">
            <g id="Group">
              <g id="Group_2">
                <g id="Group_3">
                  <path
                    id="Vector"
                    d="M14 1.09995L12.9001 0L7 5.90028L1.09995 0L0 1.09995L5.90005 7L0 12.9001L1.09995 14L7 8.09995L12.9001 14L14 12.9001L8.09995 7L14 1.09995Z"
                    fill="white"
                  />
                </g>
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_164">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "wallet":
      return (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="cash_icon 1" clipPath="url(#clip0_1_20)">
            <g id="Group">
              <path
                id="Vector"
                d="M19.2536 5.59925H3.86715C3.67771 5.59925 3.49603 5.524 3.36208 5.39004C3.22812 5.25609 3.15287 5.07441 3.15287 4.88497C3.15287 4.69553 3.22812 4.51384 3.36208 4.37989C3.49603 4.24594 3.67771 4.17068 3.86715 4.17068H16.4186V1.49211C16.4186 1.1114 16.2479 0.756397 15.9507 0.51854C15.8047 0.401366 15.6341 0.318671 15.4517 0.27662C15.2693 0.234569 15.0797 0.234248 14.8971 0.275682L1.47287 3.28997C1.19617 3.35114 0.948759 3.50519 0.771768 3.7265C0.594777 3.9478 0.498875 4.22302 0.50001 4.50639V18.5085C0.50001 19.1957 1.0593 19.7557 1.74644 19.7557H19.2536C19.9407 19.7557 20.5 19.1964 20.5 18.5085V6.84568C20.5 6.15854 19.9407 5.59925 19.2536 5.59925ZM17.0043 13.9507C16.3364 13.9507 15.7936 13.4071 15.7936 12.7392C15.7936 12.0714 16.3371 11.5278 17.0043 11.5278C17.6729 11.5278 18.2157 12.0714 18.2157 12.7392C18.2157 13.4071 17.6729 13.9507 17.0043 13.9507Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_20">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

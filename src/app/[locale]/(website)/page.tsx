import AcceptOffersFromMultipleLenders from "@/assets/home/AcceptOffersFromMultipleLenders.png";
import bankApproval from "@/assets/home/bankApproval.png";
import aiyusur from "@/assets/home/banks/aiyusur.png";
import alimna from "@/assets/home/banks/alimna.png";
import alrajhiBank from "@/assets/home/banks/alrajhiBank.png";
import arabNationalBank from "@/assets/home/banks/arabNationalBank.png";
import bankAlBibad from "@/assets/home/banks/bankAlBibad.png";
import bsf from "@/assets/home/banks/bsf.png";
import emkun from "@/assets/home/banks/emkun.png";
import riyadBank from "@/assets/home/banks/riyadBank.png";
import saudiNationalBank from "@/assets/home/banks/saudiNationalBank.png";
import sulfa from "@/assets/home/banks/sulfa.png";
import tamam from "@/assets/home/banks/tamam.png";
import tasheelFinance from "@/assets/home/banks/tasheelFinance.png";
import habibiKUluKulu from "@/assets/home/habibiKUluKulu.png";
import heroMobileInHand from "@/assets/home/hero-mobile-in-hand.png";
import iPhone16Pro from "@/assets/home/iPhone-16-Pro.png";
import BankLogosGrid from "@/components/BankLogosGrid";
import { Typography } from "@/components/common/atoms/Typography";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import InfoCard, { InfoCardProps } from "@/components/InfoCard";
import InfoImageCard from "@/components/InfoImageCard";
import { ResponsiveAccordion } from "@/components/ResponsiveAccordion";
import { Button } from "@/components/ui/button";
import AppleStoreIcon from "@/svgs/AppleStoreIcon";
import AutoLeaseFinance from "@/svgs/AutoLeaseFinance";
import CreditCardIcon from "@/svgs/CreditCardIcon";
import PersonalFInance from "@/svgs/PersonalFInance";
import PlayStoreIcon from "@/svgs/PlayStoreIcon";
import RealEstateFinance from "@/svgs/RealEstateFinance";
import Image from "next/image";

const infoCards: InfoCardProps[] = [
  {
    icon: <PersonalFInance />,
    title: "Personal Financing",
    description:
      "Simple, flexible loans to help you cover personal needs confidently.",
  },
  {
    icon: <AutoLeaseFinance />,
    title: "Auto Lease Financing",
    description: "Lease your dream car with ease and tailored monthly plans.",
  },
  {
    icon: <CreditCardIcon />,
    title: "Credit Card",
    description:
      "Turn your credit card purchases into easy monthly payments — no hassle, no surprises.",
    comingSoon: true,
  },
  {
    icon: <RealEstateFinance />,
    title: "Real Estate Financing",
    description:
      "Finance your future home with trusted, straightforward lending support.",
    comingSoon: true,
  },
];
const infoCardsPlatform: InfoCardProps[] = [
  {
    icon: (
      <svg
        width={72}
        height={72}
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_735_33520)">
          <path
            d="M16.91 22.3175L9.6925 29.14C6.7125 31.96 5 35.9325 5 40.0375V57.5C5 58.8825 3.8825 60 2.5 60C1.1175 60 0 58.8825 0 57.5V40.0375C0 34.565 2.28 29.265 6.2575 25.5075L13.4775 18.685C14.4725 17.7375 16.0625 17.78 17.01 18.785C17.96 19.7875 17.9125 21.37 16.91 22.3175ZM60 11.25V43.75C60 49.9525 54.9525 55 48.75 55H33.75C31.325 55 29.04 54.2125 27.125 52.805L26.0075 54.38C25.3475 55.3075 25 56.4 25 57.5375C25 58.92 23.8825 60 22.5 60C21.1175 60 20 58.9175 20 57.5375C20 55.355 20.67 53.26 21.9325 51.4825L31.995 37.3025C32.8525 36.0575 32.615 34.35 31.425 33.36C30.2925 32.4125 28.61 32.445 27.5175 33.4425L16.66 43.115C15.6325 44.0325 14.0475 43.9425 13.1325 42.9125C12.2125 41.8825 12.305 40.3025 13.335 39.385L24.1725 29.7275C27.08 27.0775 31.5825 26.9825 34.6275 29.5175C36.3425 30.9475 37.29 32.9375 37.4575 35H55V11.25C55 7.8025 52.1975 5 48.75 5H33.75C30.3025 5 27.5 7.8025 27.5 11.25V20C27.5 21.3825 26.3825 22.5 25 22.5C23.6175 22.5 22.5 21.3825 22.5 20V11.25C22.5 5.0475 27.5475 0 33.75 0H48.75C54.9525 0 60 5.0475 60 11.25ZM55 43.75V40H36.19C36.155 40.055 30.015 48.735 30.015 48.735C31.09 49.545 32.3775 50 33.75 50H48.75C52.1975 50 55 47.1975 55 43.75ZM42.5 42.5H40C38.6175 42.5 37.5 43.6175 37.5 45C37.5 46.3825 38.6175 47.5 40 47.5H42.5C43.8825 47.5 45 46.3825 45 45C45 43.6175 43.8825 42.5 42.5 42.5ZM50 17.5V22.5C51.38 22.5 52.5 23.62 52.5 25C52.5 26.38 51.38 27.5 50 27.5H39.6225C39.0925 26.8475 38.4975 26.2325 37.8275 25.675C36.2425 24.355 34.4075 23.5225 32.5 23.085V17.5C31.1825 17.625 29.9925 16.6275 30 15.2825C30 14.47 30.4425 13.725 31.155 13.335L39.64 8.7075C40.1425 8.435 40.695 8.2975 41.25 8.2975C41.805 8.2975 42.3575 8.435 42.86 8.7075L51.345 13.335C52.0575 13.7225 52.5 14.47 52.5 15.2825C52.5075 16.6275 51.3175 17.625 50 17.5ZM45 17.5H37.5V22.5H45V17.5Z"
            fill="#0054FD"
          />
        </g>
        <defs>
          <clipPath id="clip0_735_33520">
            <rect width={60} height={60} fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Digital Application Process",
    description:
      "Apply online in just a few minutes — no paperwork, no hassle.",
  },
  {
    icon: (
      <svg
        width={60}
        height={47}
        viewBox="0 0 60 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51.1863 15.8468C50.452 11.8753 47.3245 8.74788 43.353 8.0135C42.5129 3.46233 38.5316 0 33.7415 0H9.45817C4.05905 0 -0.333496 4.39254 -0.333496 9.79167V21.5417C-0.333496 26.3318 3.12884 30.313 7.68 31.1532C8.41438 35.1247 11.5418 38.2521 15.5133 38.9865C16.3535 43.5377 20.3348 47 25.1248 47H49.4082C54.8073 47 59.1998 42.6075 59.1998 37.2083V25.4583C59.1998 20.6683 55.7375 16.687 51.1863 15.8468ZM3.58317 21.5417V9.79167C3.58317 6.55258 6.21909 3.91667 9.45817 3.91667H33.7415C36.2913 3.91667 38.4454 5.55971 39.2562 7.83333H17.2915C11.8924 7.83333 7.49984 12.2259 7.49984 17.625V27.0563C5.22621 26.2456 3.58317 24.0914 3.58317 21.5417ZM11.4165 29.375V17.625C11.4165 14.3859 14.0524 11.75 17.2915 11.75H41.5748C44.1246 11.75 46.2788 13.393 47.0895 15.6667H25.1248C19.7257 15.6667 15.3332 20.0592 15.3332 25.4583V34.8897C13.0595 34.0789 11.4165 31.9248 11.4165 29.375ZM55.2832 37.2083C55.2832 40.4474 52.6473 43.0833 49.4082 43.0833H25.1248C21.8858 43.0833 19.2498 40.4474 19.2498 37.2083V25.4583C19.2498 22.2192 21.8858 19.5833 25.1248 19.5833H49.4082C52.6473 19.5833 55.2832 22.2192 55.2832 25.4583V37.2083Z"
          fill="#0054FD"
        />
      </svg>
    ),
    title: "Multiple Bank Offers",
    description:
      "Compare real offers from trusted banks and choose what’s best for you. ",
  },
  {
    icon: (
      <svg
        width={51}
        height={60}
        viewBox="0 0 51 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.5435 0.128076C25.0562 -0.0426758 25.6108 -0.0427082 26.1235 0.128076L41.7856 5.34976C44.2757 6.17693 46.4417 7.76815 47.9761 9.89663C49.5104 12.0252 50.3349 14.5833 50.3325 17.2072V30.0001C50.3322 48.9071 27.3333 59.3493 26.3482 59.7843C26.0287 59.9262 25.683 59.9991 25.3335 59.9992C24.9838 59.9992 24.6374 59.9263 24.3179 59.7843C23.3293 59.3477 0.333822 48.9056 0.333501 30.0001V17.2072C0.331145 14.5833 1.15559 12.0252 2.68995 9.89663C4.22435 7.76805 6.39117 6.17694 8.88135 5.34976L24.5435 0.128076ZM10.4634 10.0929C8.96986 10.5904 7.6702 11.5446 6.74952 12.8214C5.82885 14.0983 5.3337 15.633 5.3335 17.2072V30.0001C5.33381 43.6722 21.1261 52.5894 25.3335 54.7218C29.5364 52.5816 45.3322 43.6369 45.3325 30.0001V17.2072C45.3323 15.633 44.8372 14.0983 43.9165 12.8214C42.9958 11.5446 41.6962 10.5904 40.2026 10.0929L25.3335 5.13491L10.4634 10.0929ZM35.3189 20.0158C35.6483 20.0161 35.9746 20.0818 36.2788 20.2082C36.5831 20.3346 36.8596 20.5199 37.0923 20.7531C37.325 20.9863 37.5095 21.2631 37.6353 21.5675C37.761 21.8721 37.826 22.1989 37.8257 22.5285C37.8253 22.8579 37.7597 23.1842 37.6333 23.4884C37.5069 23.7926 37.3225 24.0693 37.0894 24.3019L26.4087 34.9816C25.9718 35.4214 25.4522 35.7707 24.8794 36.008C24.3065 36.2453 23.6918 36.3664 23.0718 36.3644H22.9888C22.3561 36.3547 21.7317 36.2159 21.1538 35.9582C20.5761 35.7004 20.0563 35.3286 19.6265 34.8644L13.8618 28.8644C13.6247 28.6299 13.4366 28.3503 13.3091 28.0421C13.1817 27.734 13.1174 27.403 13.1196 27.0695C13.1219 26.736 13.1911 26.4062 13.3228 26.0998C13.4545 25.7933 13.6458 25.5156 13.8862 25.2843C14.1266 25.0532 14.411 24.8728 14.7222 24.7531C15.0335 24.6334 15.3663 24.5774 15.6997 24.588C16.033 24.5987 16.3606 24.6763 16.6636 24.8156C16.9667 24.9549 17.2392 25.1534 17.4644 25.3996L23.0737 31.2492L33.5444 20.7492C33.7776 20.5165 34.0544 20.3319 34.3589 20.2062C34.6633 20.0805 34.9895 20.0155 35.3189 20.0158Z"
          fill="#0054FD"
        />
      </svg>
    ),
    title: "Easy Registration with SIMAH & Yaqeen",
    description:
      "We clearly show costs, fees, and terms. No hidden charges, ever.",
  },
  {
    icon: (
      <svg
        width={76}
        height={72}
        viewBox="0 0 76 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_739_34085)">
          <path
            d="M51.86 29.175L55.4225 25.6125C57.7925 28.6125 59.37 32.26 59.84 36.2475H54.7875C54.3825 33.63 53.3575 31.2225 51.86 29.1725V29.175ZM51.86 48.3225L55.4225 51.885C57.7925 48.885 59.37 45.2375 59.84 41.25H54.7875C54.3825 43.8675 53.3575 46.2725 51.86 48.3225ZM25.615 55.42C28.615 57.79 32.2625 59.3675 36.25 59.8375V54.785C33.6325 54.38 31.225 53.355 29.175 51.8575L25.6125 55.42H25.615ZM41.25 54.7875V59.84C45.2375 59.37 48.885 57.7925 51.885 55.4225L48.3225 51.86C46.275 53.3575 43.87 54.3825 41.25 54.7875ZM42.4125 22.9725C41.5775 33.315 33.315 41.5775 22.9725 42.4125C23.48 44.5725 24.375 46.585 25.6475 48.3225C25.645 48.3225 25.6425 48.3225 25.64 48.3225L22.08 51.8825C19.8975 49.12 18.385 45.8075 17.79 42.19C7.715 40.53 0 31.785 0 21.25C0 9.5325 9.5325 0 21.25 0C31.785 0 40.53 7.715 42.1925 17.7875C45.81 18.385 49.1225 19.8975 51.885 22.0775L48.3225 25.64C48.3225 25.64 48.3225 25.645 48.3225 25.6475C46.585 24.375 44.5725 23.48 42.4125 22.9725ZM17.585 37.0675C18.405 26.6925 26.6925 18.405 37.0675 17.585C35.4 10.3875 28.9475 5 21.25 5C12.29 5 5 12.29 5 21.25C5 28.9475 10.3875 35.4 17.585 37.0675ZM37.4325 22.57C37.3 22.58 34.55 22.7875 32.4275 23.78C28.605 25.565 25.5 28.575 23.78 32.4275C22.4025 35.5125 22.58 37.3 22.57 37.4325C30.475 36.7925 36.79 30.4775 37.4325 22.57Z"
            fill="#0054FD"
          />
        </g>
        <defs>
          <clipPath id="clip0_739_34085">
            <rect width={60} height={60} fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Transparent System",
    description:
      "We clearly show costs, fees, and terms. No hidden charges, ever.",
  },
  {
    icon: (
      <svg
        width={76}
        height={72}
        viewBox="0 0 76 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_739_34090)">
          <path
            d="M25 57.5C25 58.88 23.88 60 22.5 60H12.5C5.6075 60 0 54.3925 0 47.5V12.5C0 5.6075 5.6075 0 12.5 0H32.5C39.3925 0 45 5.6075 45 12.5V17.5C45 18.88 43.88 20 42.5 20C41.12 20 40 18.88 40 17.5V12.5C40 8.365 36.635 5 32.5 5H12.5C8.365 5 5 8.365 5 12.5V47.5C5 51.635 8.365 55 12.5 55H22.5C23.88 55 25 56.12 25 57.5ZM35 15C35 13.62 33.88 12.5 32.5 12.5H12.5C11.12 12.5 10 13.62 10 15C10 16.38 11.12 17.5 12.5 17.5H32.5C33.88 17.5 35 16.38 35 15ZM12.5 37.5C11.12 37.5 10 38.62 10 40C10 41.38 11.12 42.5 12.5 42.5H17.5C18.88 42.5 20 41.38 20 40C20 38.62 18.88 37.5 17.5 37.5H12.5ZM60 42.5C60 52.15 52.15 60 42.5 60C32.85 60 25 52.15 25 42.5C25 32.85 32.85 25 42.5 25C52.15 25 60 32.85 60 42.5ZM55 42.5C55 35.6075 49.3925 30 42.5 30C35.6075 30 30 35.6075 30 42.5C30 49.3925 35.6075 55 42.5 55C49.3925 55 55 49.3925 55 42.5ZM42.5 32.5C40.43 32.5 38.75 34.18 38.75 36.25C38.75 38.32 40.43 40 42.5 40C44.57 40 46.25 38.32 46.25 36.25C46.25 34.18 44.57 32.5 42.5 32.5ZM42.5 42.5C41.12 42.5 40 43.62 40 45V50C40 51.38 41.12 52.5 42.5 52.5C43.88 52.5 45 51.38 45 50V45C45 43.62 43.88 42.5 42.5 42.5ZM25 27.5C25 26.12 23.88 25 22.5 25H12.5C11.12 25 10 26.12 10 27.5C10 28.88 11.12 30 12.5 30H22.5C23.88 30 25 28.88 25 27.5Z"
            fill="#0054FD"
          />
        </g>
        <defs>
          <clipPath id="clip0_739_34090">
            <rect width={60} height={60} fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Fast Updates",
    description:
      "Track your application status at every step. Stay informed and in control.",
  },
  {
    icon: (
      <svg
        width={76}
        height={72}
        viewBox="0 0 76 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.5433 40.2502C29.059 40.7059 29.7058 40.9351 30.3526 40.9351C30.9994 40.9351 31.6462 40.7059 32.1619 40.2502C33.652 38.9293 46.7267 27.039 46.7267 16.3741C46.7267 5.0514 41.6753 0 30.3526 0C19.0299 0 13.9785 5.0514 13.9785 16.3741C13.9785 27.039 27.0532 38.9293 28.5433 40.2502ZM30.3526 5.45802C38.616 5.45802 41.2686 8.11062 41.2686 16.3741C41.2686 22.3506 34.5089 30.322 30.3526 34.4537C26.1963 30.322 19.4366 22.3506 19.4366 16.3741C19.4366 8.11062 22.0892 5.45802 30.3526 5.45802ZM60.369 40.916C60.369 41.6692 60.0579 42.3924 59.5066 42.9055C59.2801 43.1211 53.8248 48.2025 46.915 52.3424C40.0515 56.455 31.6816 59.6834 31.3296 59.8199C30.6992 60.06 30.0033 60.06 29.3729 59.8199C29.0208 59.6834 20.651 56.455 13.7875 52.3424C6.87766 48.2025 1.4251 43.1211 1.19586 42.9055C0.644603 42.3924 0.333496 41.6692 0.333496 40.916C0.333496 40.1628 0.647332 39.4396 1.19586 38.9266C1.34869 38.782 5.00283 35.3761 10.1033 31.8639C11.3505 31.0125 13.0452 31.329 13.8994 32.5653C14.7536 33.807 14.4397 35.5071 13.198 36.364C10.7801 38.026 8.68699 39.688 7.21333 40.9188C9.34196 42.6954 12.7587 45.3671 16.5957 47.6676C21.7289 50.7432 27.9784 53.3794 30.3553 54.34C32.7296 53.3767 38.979 50.7432 44.115 47.6676C47.952 45.3671 51.366 42.6981 53.4973 40.9188C52.1028 39.7535 50.1543 38.2061 47.9029 36.6342C46.6666 35.7719 46.3637 34.0717 47.2261 32.8327C48.0884 31.5992 49.7886 31.299 51.0248 32.1559C55.9098 35.5672 59.3674 38.7929 59.5121 38.9239C60.0633 39.4396 60.3744 40.1628 60.3744 40.916H60.369ZM30.3526 21.8321C26.4528 21.8321 24.8946 20.2738 24.8946 16.3741C24.8946 12.4743 26.4528 10.916 30.3526 10.916C34.2524 10.916 35.8106 12.4743 35.8106 16.3741C35.8106 20.2738 34.2524 21.8321 30.3526 21.8321Z"
          fill="#0054FD"
        />
      </svg>
    ),
    title: "Local Expertise",
    description:
      "Built for the Saudi market — with support for Mada, SIMAH, and more.",
  },
];

const page = () => {
  return (
    <div className="space-y-8">
      <div className="container">
        <div className="space-y-8 pt-16 relative overflow-hidden">
          <Typography variant="headingHero">
            Find the <br /> right financing <br /> fast and easy.
          </Typography>

          <div className="bg-[linear-gradient(269.83deg,_#6598FE_1.23%,_#0054FD_99.87%)] rounded-3xl space-y-8 relative pt-8">
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="space-y-8">
                <div className="space-y-8 px-8">
                  <Typography variant="paragraphHero" color="white">
                    Access real-time financing offers tailored to your needs.
                    From the comfort of your home.
                  </Typography>
                  <Button size="lg" variant="outline">
                    Apply for Finance
                  </Button>
                </div>

                <div className="flex items-center gap-4 px-8 xl:pb-8">
                  <Typography color="blueGrayLight" className="capitalize">
                    Get the <br />
                    Mobile App
                  </Typography>
                  <AppleStoreIcon />
                  <PlayStoreIcon />
                </div>

                {/* Lazy loaded image - XL screens only */}
                <Image
                  src={heroMobileInHand.src}
                  alt="Hero Mobile in hand"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="hidden xl:block xl:absolute xl:bottom-0 xl:right-0 xl:z-0 w-full object-cover max-w-xl xl:max-w-md xl:rounded-3xl"
                />
              </div>

              <div className="flex justify-end">
                {/* Lazy loaded image - mobile/tablet screens */}
                <Image
                  src={heroMobileInHand.src}
                  alt="Hero Mobile in hand"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="block sm:hidden md:block xl:hidden max-w-xs rounded-3xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((item, index) => (
            <InfoCard {...item} key={index} />
          ))}
        </div>
      </div>
      <div className="container pt-20">
        <SectionWrapper
          heading="How It Works"
          title="Your Loan Journey, Simplified"
          subTitle="See how quick and simple it is to apply for financing, compare offers, and get approved — all in one place."
          className="max-w-2xl"
        >
          <div className="space-y-5">
            <div className="grid md:grid-cols-5 gap-5">
              <InfoImageCard
                title="Submit Request"
                description="Complete a short form in just a few steps."
                imageSrc={iPhone16Pro.src}
                imageClassName="max-w-xs"
                className="md:col-span-2"
              />

              <InfoImageCard
                title="Receive & Accept Offers From Multiple Lenders"
                description="Get real loan offers from top banks and choose the one that works best for you."
                imageSrc={AcceptOffersFromMultipleLenders.src}
                className="md:col-span-3"
                imageClassName="max-w-lg"
              />
            </div>
            <div className="grid md:grid-cols-7 gap-5">
              <InfoImageCard
                title="Wait for banks Approval"
                description="Once you accept an offer, the bank reviews your application and shares the decision."
                imageSrc={bankApproval.src}
                className="md:col-span-4"
                imageClassName="max-w-xl"
              />
              <InfoImageCard
                title="Sign Agreement with Bank"
                description="Complete your loan by signing the agreement at your chosen branch."
                imageSrc={habibiKUluKulu.src}
                imageClassName="max-w-lg mb-9"
                className="md:col-span-3"
              />
            </div>
          </div>
        </SectionWrapper>
      </div>
      <div className="container pt-20">
        <SectionWrapper
          heading="Why Choose Us?"
          title="One platform. Multiple offers. Total control."
          subTitle="We simplify the loan process so you can apply with confidence, compare real offers from trusted banks, and move forward knowing you're in control — every step of the way."
          className="max-w-5xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infoCardsPlatform.map((item, index) => (
              <InfoCard {...item} key={index} minimal />
            ))}
          </div>
        </SectionWrapper>
      </div>
      <div className="container pt-20">
        <SectionWrapper
          heading="Our Financial Partners"
          title="Backed by Saudi Arabia’s Trusted Finance Institutes"
          subTitle="We work with leading financial institutions across the Kingdom to bring you reliable loan options you can trust."
          subTitleClassName="max-w-4xl mx-auto"
        >
          <BankLogosGrid
            logos={[
              { name: "Al Rajhi Bank", src: alrajhiBank.src },
              { name: "Al Rajhi Bank", src: saudiNationalBank.src },
              { name: "Al Rajhi Bank", src: riyadBank.src },
              { name: "Al Rajhi Bank", src: bsf.src },
              { name: "Al Rajhi Bank", src: arabNationalBank.src },
              { name: "Al Rajhi Bank", src: bankAlBibad.src },
              { name: "Al Rajhi Bank", src: tasheelFinance.src },
              { name: "Al Rajhi Bank", src: aiyusur.src },
              { name: "Al Rajhi Bank", src: emkun.src },
              { name: "Al Rajhi Bank", src: tamam.src },
              { name: "Al Rajhi Bank", src: sulfa.src },
              { name: "Al Rajhi Bank", src: alimna.src },
            ]}
          />
        </SectionWrapper>
      </div>
      <div className="container pt-20">
        <SectionWrapper
          heading="FAQ"
          title="Frequently Asked Questions"
          subTitle="We work with leading financial institutions across the Kingdom to bring you reliable loan options you can trust."
          className="max-w-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResponsiveAccordion
              items={[
                {
                  title: "How do I apply?",
                  description:
                    "Once your information is verified, eligible offers will be displayed on your dashboard—usually within a few minutes of completing the process.",
                },
                {
                  title: "When will I get a response?",
                  description:
                    "Once your information is verified, eligible offers will be displayed on your dashboard—usually within a few minutes of completing the process.",
                },
                {
                  title: "How do I track my application status?",
                  description:
                    "Once your information is verified, eligible offers will be displayed on your dashboard—usually within a few minutes of completing the process.",
                },
                {
                  title:
                    "What does it mean if an offer says “More info needed?",
                  description:
                    "Once your information is verified, eligible offers will be displayed on your dashboard—usually within a few minutes of completing the process.",
                },
                {
                  title: "How do I sign the contract?",
                  description:
                    "Once your information is verified, eligible offers will be displayed on your dashboard—usually within a few minutes of completing the process.",
                },
                {
                  title: "I’m facing issues with the app.",
                  description:
                    "Once your information is verified, eligible offers will be displayed on your dashboard—usually within a few minutes of completing the process.",
                },
              ]}
            />
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default page;

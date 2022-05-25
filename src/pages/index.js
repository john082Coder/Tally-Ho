import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage"));
const LiquidityPage = lazy(() => import("./LiquidityPage"));
const ExchangePage = lazy(() => import("./ExchangePage"));
const PoolsPage = lazy(() => import("./PoolsPage"));
const FarmsPage = lazy(() => import("./FarmsPage"));
const TallyPay = lazy(() => import("./TallyPay/TallyPay"));
const TallyPayIndex = lazy(() => import("./TallyPay/TallyPayIndex"));
const TallyWills = lazy(() => import("./TallyPay/TallyWills"));
const LivingTrust = lazy(() => import("./TallyPay/LivingTrust"));
const MyDefiAccount = lazy(() => import("./TallyPay/MyDefiAccount"));
const TempLock = lazy(() => import("./TallyPay/TempLock"));
const NFTmarketPage = lazy(() => import("./NFTMarketPage"));
const StakeLaunchPadPage = lazy(() => import("./StakeLaunchpadPage"));
const NFTearnPage = lazy(() => import("./NFTearnPage"));
const TallyCentralisedPage = lazy(() => import("./TallyCetralisedPage"));
const PoolsStakeType = lazy(() => import("./PoolsStakeType"));
const TokenCheckerPage = lazy(() => import("./TokenCheckerPage"));
const AnalyticsPageLayout = lazy(() => import("./AnalyticsPageLayout"));
const AnalyticsOverviewPage = lazy(() => import("./AnalyticsOverviewPage"));
const AnalyticsFilterPage = lazy(() => import("./AnalyticsFilterPage"));

export {
    HomePage,
    LiquidityPage,
    ExchangePage,
    PoolsPage,
    FarmsPage,
    TallyPay,
    TallyPayIndex,
    TallyWills,
    LivingTrust,
    TempLock,
    MyDefiAccount,
    NFTmarketPage,
    StakeLaunchPadPage,
    NFTearnPage,
    TallyCentralisedPage,
    PoolsStakeType,
    TokenCheckerPage,
    AnalyticsPageLayout,
    AnalyticsOverviewPage,
    AnalyticsFilterPage
};

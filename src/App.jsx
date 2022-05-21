import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout, LazyLoad, NotFoundRoute } from './components';
import { CoinsTable, LiquiditySwap, SwapSection } from './containers';
import {
    HomePage,
    LiquidityPage,
    ExchangePage,
    PoolsPage,
    FarmsPage,
    NFTmarketPage,
    // StakeLaunchPadPage,
    // NFTearnPage,
    TallyCentralisedPage,
    PoolsStakeType,
    TokenCheckerPage,
    AnalyticsPageLayout,
    AnalyticsOverviewPage,
    AnalyticsFilterPage,
    TallyPay,
    TallyPayIndex,
    TallyWills,
    LivingTrust,
    TempLock,
} from './pages';

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                {/* Home Page Route */}
                <Route
                    index
                    element={
                        <LazyLoad>
                            <HomePage />
                        </LazyLoad>
                    }
                />

                {/* Liquidity Page Route */}
                <Route
                    path='liquidity'
                    element={
                        <LazyLoad>
                            <LiquidityPage />
                        </LazyLoad>
                    }
                >
                    <Route path='add/:coin' element={<LiquiditySwap />} />
                </Route>

                {/* Exchange Page Route */}
                <Route
                    path='swap'
                    element={
                        <LazyLoad>
                            <ExchangePage />
                        </LazyLoad>
                    }
                >
                    <Route path='add/:coin' element={<SwapSection />} />
                </Route>

                {/* Pools Page Route */}
                <Route
                    path='pools'
                    element={
                        <LazyLoad>
                            <PoolsPage />
                        </LazyLoad>
                    }
                >
                    <Route
                        path=':stakeType'
                        element={
                            <LazyLoad>
                                <PoolsStakeType />
                            </LazyLoad>
                        }
                    />
                </Route>

                {/* Farms Page Route */}
                <Route
                    path='farms'
                    element={
                        <LazyLoad>
                            <FarmsPage />
                        </LazyLoad>
                    }
                />

                {/* Tally Pay Route */}
                <Route
                    path='tally-pay'
                    element={
                        <LazyLoad>
                            <TallyPay />
                        </LazyLoad>
                    }
                >
                    <Route
                        index
                        element={
                            <LazyLoad>
                                <TallyPayIndex />
                            </LazyLoad>
                        }
                    />

                    <Route
                        path='tally-wills'
                        element={
                            <LazyLoad>
                                <TallyWills />
                            </LazyLoad>
                        }
                    />
                    <Route
                        path='living-trust'
                        element={
                            <LazyLoad>
                                <LivingTrust />
                            </LazyLoad>
                        }
                    />
                    <Route
                        path='temp-lock'
                        element={
                            <LazyLoad>
                                <TempLock />
                            </LazyLoad>
                        }
                    />
                </Route>

                {/* NFTmarket Page Route */}
                <Route
                    path='nftmarket'
                    element={
                        <LazyLoad>
                            <NFTmarketPage />
                        </LazyLoad>
                    }
                />

                {/* Tally Launchpad Page Route */}
                <Route
                    path='stakelaunchpad'
                    element={
                        // <LazyLoad>
                        //     <StakeLaunchPadPage />
                        // </LazyLoad>
                        <NotFoundRoute />
                    }
                />

                {/* NFTearn Page Route */}
                <Route
                    path='nftearn'
                    element={
                        // <LazyLoad>
                        //     <NFTearnPage />
                        // </LazyLoad>
                        <NotFoundRoute />
                    }
                />

                {/* Token Checker Page Route */}
                <Route
                    path='tokenchecker'
                    element={
                        <LazyLoad>
                            <TokenCheckerPage />
                        </LazyLoad>
                    }
                >
                    <Route index path=':filter' element={<CoinsTable />} />
                </Route>

                {/* Tally Centralised Page Route */}
                <Route
                    path='tallycentralised'
                    element={
                        <LazyLoad>
                            <TallyCentralisedPage />
                        </LazyLoad>
                    }
                />

                {/* Analytics Routes */}
                <Route
                    path='analytics'
                    element={
                        <LazyLoad>
                            <AnalyticsPageLayout />
                        </LazyLoad>
                    }
                >
                    <Route
                        index
                        element={
                            <LazyLoad>
                                <AnalyticsOverviewPage />
                            </LazyLoad>
                        }
                    />

                    <Route
                        path=':filter'
                        element={
                            <LazyLoad>
                                <AnalyticsFilterPage />
                            </LazyLoad>
                        }
                    />
                </Route>

                <Route path='*' element={<NotFoundRoute />} />
            </Route>
        </Routes>
    );
}

export default App;

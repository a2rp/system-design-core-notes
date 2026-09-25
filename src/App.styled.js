// App.styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,
    Header: styled.header`
        /* border: 1px solid #f00; */
        height: 64px;
        flex-shrink: 0;
    `,
    Main: styled.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `,
    GoToTop: styled.button`
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 80;
        display: grid;
        place-items: center;
        width: 42px;
        height: 42px;
        border: 1px solid var(--color-border);
        border-radius: 50%;
        background: var(--color-surface-2);
        color: var(--color-text-primary);
        box-shadow: 0 12px 30px var(--color-shadow);
        cursor: pointer;
        transition: border-color 180ms ease, box-shadow 180ms ease, color 180ms ease, text-shadow 180ms ease;

        &:hover,
        &:focus-visible {
            border-color: var(--color-primary);
            color: var(--color-primary);
            box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent);
            text-shadow: 0 0 12px color-mix(in srgb, var(--color-primary) 65%, transparent);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }

        svg {
            width: 17px;
            height: 17px;
        }

        @media (width < 520px) {
            right: 16px;
            bottom: 16px;
        }
    `,
};

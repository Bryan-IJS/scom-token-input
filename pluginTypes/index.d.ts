/// <amd-module name="@scom/scom-token-input/index.css.ts" />
declare module "@scom/scom-token-input/index.css.ts" {
    export const imageStyle: string;
    export const markdownStyle: string;
    export const inputStyle: string;
    export const tokenSelectionStyle: string;
    export const buttonStyle: string;
    const _default: string;
    export default _default;
}
/// <amd-module name="@scom/scom-token-input/global/index.ts" />
declare module "@scom/scom-token-input/global/index.ts" {
    export type IType = 'button' | 'combobox';
}
/// <amd-module name="@scom/scom-token-input/utils/index.ts" />
declare module "@scom/scom-token-input/utils/index.ts" {
    import { BigNumber } from "@ijstech/eth-wallet";
    export const formatNumber: (value: number | string | BigNumber, decimals?: number) => string;
}
/// <amd-module name="@scom/scom-token-input/tokenSelect.css.ts" />
declare module "@scom/scom-token-input/tokenSelect.css.ts" {
    export const scrollbarStyle: string;
    export const tokenStyle: string;
    export const modalStyle: string;
    const _default_1: string;
    export default _default_1;
}
/// <amd-module name="@scom/scom-token-input/tokenSelect.tsx" />
declare module "@scom/scom-token-input/tokenSelect.tsx" {
    import { Module, ControlElement, Container } from '@ijstech/components';
    import { ITokenObject } from '@scom/scom-token-list';
    interface TokenSelectElement extends ControlElement {
        chainId?: number;
        token?: ITokenObject;
        tokenList?: ITokenObject[];
        onSelectToken?: (token: ITokenObject | undefined) => void;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['token-select']: TokenSelectElement;
            }
        }
    }
    export class TokenSelect extends Module {
        private _token?;
        private _tokenList;
        private _chainId;
        private tokenMap;
        private currentToken;
        private mdCbToken;
        private gridTokenList;
        private wrapper;
        onSelectToken: (token: ITokenObject | undefined) => void;
        constructor(parent?: Container, options?: any);
        get token(): ITokenObject | undefined;
        set token(value: ITokenObject | undefined);
        get tokenList(): Array<ITokenObject>;
        set tokenList(value: Array<ITokenObject>);
        get chainId(): number;
        set chainId(value: number | undefined);
        private renderToken;
        private clearTokenList;
        private renderTokenList;
        showModal(): void;
        hideModal(): void;
        private setActive;
        private onSelect;
        init(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-token-input" />
declare module "@scom/scom-token-input" {
    import { ControlElement, Module, Container, Control } from '@ijstech/components';
    import { IType } from "@scom/scom-token-input/global/index.ts";
    import { ITokenObject } from '@scom/scom-token-list';
    interface ScomTokenInputElement extends ControlElement {
        type?: IType;
        title?: string;
        token?: ITokenObject;
        tokenDataListProp?: ITokenObject[];
        readOnly?: boolean;
        tokenReadOnly?: boolean;
        inputReadOnly?: boolean;
        withoutConnected?: boolean;
        importable?: boolean;
        isSortBalanceShown?: boolean;
        isBtnMaxShown?: boolean;
        isCommonShown?: boolean;
        isInputShown?: boolean;
        isBalanceShown?: boolean;
        value?: any;
        placeholder?: string;
        address?: string;
        chainId?: number;
        tokenBalancesMapProp?: Record<string, string>;
        onInputAmountChanged?: (target: Control, event: Event) => void;
        onSelectToken?: (token: ITokenObject | undefined) => void;
        onSetMaxBalance?: () => void;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-token-input']: ScomTokenInputElement;
            }
        }
    }
    export default class ScomTokenInput extends Module {
        private gridTokenInput;
        private inputAmount;
        private lbBalance;
        private pnlTitle;
        private pnlBalance;
        private mdToken;
        private cbToken;
        private btnMax;
        private btnToken;
        private pnlTopSection;
        private _type;
        private _token;
        private _title;
        private _isCommonShown;
        private _isSortBalanceShown;
        private _isBtnMaxShown;
        private _readOnly;
        private _tokenReadOnly;
        private _inputReadOnly;
        private _importable;
        private _isInputShown;
        private _isBalanceShown;
        private _tokenDataListProp;
        private _withoutConnected;
        private _chainId;
        private _tokenBalancesMapProp;
        private tokenBalancesMap;
        onChanged: (token?: ITokenObject) => void;
        onInputAmountChanged: (target: Control, event: Event) => void;
        private _onSelectToken;
        onSetMaxBalance: () => void;
        constructor(parent?: Container, options?: ScomTokenInputElement);
        static create(options?: ScomTokenInputElement, parent?: Container): Promise<ScomTokenInput>;
        get tokenDataListProp(): Array<ITokenObject>;
        set tokenDataListProp(value: Array<ITokenObject>);
        private get tokenListByChainId();
        private get tokenDataList();
        private sortToken;
        get onSelectToken(): any;
        set onSelectToken(callback: any);
        get type(): IType;
        set type(value: IType);
        get title(): any;
        set title(value: string | Control);
        get token(): ITokenObject | undefined;
        set token(value: ITokenObject | undefined);
        set address(value: string);
        get chainId(): number | undefined;
        set chainId(value: number | undefined);
        get isCommonShown(): boolean;
        set isCommonShown(value: boolean);
        get isSortBalanceShown(): boolean;
        set isSortBalanceShown(value: boolean);
        get isBtnMaxShown(): boolean;
        set isBtnMaxShown(value: boolean);
        get readOnly(): boolean;
        set readOnly(value: boolean);
        get tokenReadOnly(): boolean;
        set tokenReadOnly(value: boolean);
        get inputReadOnly(): boolean;
        set inputReadOnly(value: boolean);
        get importable(): boolean;
        set importable(value: boolean);
        get isInputShown(): boolean;
        set isInputShown(value: boolean);
        get isBalanceShown(): boolean;
        set isBalanceShown(value: boolean);
        get amount(): string;
        get placeholder(): string;
        set placeholder(value: string);
        get value(): any;
        set value(value: any);
        get tokenBalancesMapProp(): Record<string, string>;
        set tokenBalancesMapProp(value: Record<string, string>);
        private getBalance;
        private onSetMax;
        private onAmountChanged;
        private onToggleFocus;
        _handleFocus(event: Event): boolean;
        private renderTokenList;
        private updateTokenUI;
        private updateBalance;
        private updateTokenButton;
        private onButtonClicked;
        private onSelectFn;
        init(): void;
        render(): any;
    }
}

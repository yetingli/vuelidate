import {
  ValidationRuleWithoutParams,
  ValidationRuleWithParams,
  ValidationRule,
  ValidationArgs
} from '@vuelidate/core'
import { Ref } from 'vue-demi';

// Rules
export const alpha: ValidationRuleWithoutParams;
export const alphaNum: ValidationRuleWithoutParams;
export const and: (
  ...validators: ValidationRule[]
) => ValidationRuleWithoutParams;
export const between: (
  min: number | Ref<number>,
  max: number | Ref<number>
) => ValidationRuleWithParams<{ min: number, max: number }>;
export const decimal: ValidationRuleWithoutParams;
export const email: ValidationRuleWithoutParams;
export const integer: ValidationRuleWithoutParams;
export const ipAddress: ValidationRuleWithoutParams;
export const macAddress: (separator: string | Ref<string>) => ValidationRuleWithoutParams;
export const maxLength: (
  max: number | Ref<number>
) => ValidationRuleWithParams<{ max: number }>;
export const maxValue: (
  max: number | Ref<number> | string | Ref<string>
) => ValidationRuleWithParams<{ max: number }>;
export const minLength: (
  length: number | Ref<number>
) => ValidationRuleWithParams<{ length: number }>;
export const minValue: (
  min: number | Ref<number> | string | Ref<string>
) => ValidationRuleWithParams<{ min: number }>
export const not: (validator: ValidationRule) => ValidationRuleWithoutParams
export const numeric: ValidationRuleWithoutParams
export const or: (
  ...validators: ValidationRule[]
) => ValidationRuleWithoutParams
export const required: ValidationRuleWithoutParams
export const requiredIf: (prop: boolean | string | (() => boolean | Promise<boolean>)) => ValidationRuleWithoutParams
export const requiredUnless: (prop: boolean | string | (() => boolean | Promise<boolean>)) => ValidationRuleWithoutParams
export const sameAs: <E = unknown>(
  equalTo: E,
  otherName?: string
) => ValidationRuleWithParams<{ equalTo: E, otherName: string }>;
export const url: ValidationRuleWithoutParams;
export const helpers: {
  withParams: <T = unknown>(params: object, validator: ValidationRule<T>) => ValidationRuleWithParams
  withMessage: <T = unknown>(message: string | ((params: MessageProps) => string), validator: ValidationRule<T>) => ValidationRuleWithParams
  req: Function
  len: Function
  regex: Function
  unwrap: Function
  withAsync: Function,
  forEach: (validators: ValidationArgs) => { $validator: ValidationRule, $message: () => string }
}

export function TranslationFunction(path: string, params: { model: string, property: string, [key: string]: any }): string

export function messagePathFactory(params: MessageProps): string;

export function messageParamsFactory(params: {
  model: unknown,
  property: string,
  invalid: boolean,
  pending: boolean,
  propertyPath: string,
  response: unknown,
  validator: string,
  [key: string]: any
}): string;

export interface MessageProps {
  $model: string;
  $property: string;
  $params: object;
  $validator: string;
  $pending: boolean,
  $invalid: boolean,
  $response: unknown,
  $propertyPath: string,
}

export type ValidatorWrapper = (...args: unknown[]) => ValidationRuleWithParams

export function createI18nMessage({ t, messagePath, messageParams }: {
  t: typeof TranslationFunction;
  messagePath?: typeof messagePathFactory;
  messageParams?: typeof messageParamsFactory;
}): (
  validator: ValidationRule | ValidatorWrapper,
  options?: {
    withArguments?: boolean,
    messagePath?: typeof messagePathFactory,
    messageParams?: typeof messageParamsFactory,
  }) =>
  ValidationRuleWithParams |
  ((...args: unknown[]) => ValidationRuleWithParams)

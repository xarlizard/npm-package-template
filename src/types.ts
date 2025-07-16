/**
 * Example configuration interface
 */
export interface ExampleConfig {
    /** The name to greet */
    name: string;
    /** Whether to use async greeting */
    async?: boolean;
    /** Optional greeting prefix */
    prefix?: string;
}

/**
 * Example result type
 */
export type GreetingResult = {
    message: string;
    timestamp: Date;
    config: ExampleConfig;
};

/**
 * Example enum
 */
export enum GreetingType {
    FORMAL = 'formal',
    CASUAL = 'casual',
    FRIENDLY = 'friendly',
}

/**
 * Example utility type
 */
export type PartialConfig = Partial<ExampleConfig>;

/**
 * Example generic type
 */
export interface ApiResponse<T> {
    data: T;
    success: boolean;
    error?: string;
}
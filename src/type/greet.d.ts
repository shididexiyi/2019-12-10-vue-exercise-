interface GreetSetting {
    greeting: string;
    duration?: number;
    color?: string
}

declare function getGreeting(params:GreetSetting): GreetSetting
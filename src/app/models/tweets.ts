export interface Account {
    fullname: string;
    href: string;
    id: number;
}

export interface Tweets {
    account: Account;
    date: string;
    hashtags: string[];
    likes: number;
    replies: number;
    retweets: number;
    text: string;
}
export interface Ticket {
    id: string;
    title: string;
    request: string;
    status: 'open' | 'closed';
}

// type Ticket = {
//     status: "open" | "close" | "closed"; // Include "closed" here
//     id: string;
//     title: string;
//     request: string;
// };
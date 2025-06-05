"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const proposals = [
  { id: 1, title: "Add dark mode to our platform" },
  { id: 2, title: "Integrate Solana blockchain support" },
  { id: 3, title: "Reduce gas fees for all votes" },
];

export default function Home() {
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null);
  const [voted, setVoted] = useState(false);

  const handleVote = () => {
    if (selectedProposal === null) return alert("Select a proposal first");
    setVoted(true);
    console.log(`Voted for proposal ID: ${selectedProposal}`);
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center bg-gray-50 dark:bg-black">
      <h1 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
        DAO Voting Interface (Mock)
      </h1>

      <div className="grid gap-4 w-full max-w-md">
        {proposals.map((proposal) => (
          <Card
            key={proposal.id}
            className={`cursor-pointer transition border-2 ${
              selectedProposal === proposal.id ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => setSelectedProposal(proposal.id)}
          >
            <CardContent className="p-4 text-black dark:text-white">
              <p className="text-lg font-medium">{proposal.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        onClick={handleVote}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white"
        disabled={voted}
      >
        {voted ? "Vote Submitted" : "Submit Vote"}
      </Button>

      {voted && (
        <p className="mt-4 text-green-600 font-medium">
          Thank you for voting!
        </p>
      )}
    </div>
  );
}

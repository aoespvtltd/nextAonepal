"use client";
// SearchDialog.js
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

function SearchButton() {
  const navigate = useRouter();
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Local state to control dialog visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/categories/?search=${name}`); // Redirect to the search results page
    setIsOpen(false); // Close the dialog after submitting
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <SearchIcon className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(true)} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>
            Enter your search query below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex items-center">
          <Input
            id="search"
            placeholder="Type your search here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mr-2 flex-1"
          />
          <Button type="submit" >Search</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default SearchButton;

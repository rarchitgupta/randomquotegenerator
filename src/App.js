// Core
import React, { useEffect, useState } from "react";
import { Flex, Box, Button, Heading } from "@chakra-ui/core";

// Components
import OneQuote from "./Components/OneQuote";
import MultipleQuotes from "./Components/MultipleQuotes";

function App() {
  // State Management
  const [data, setData] = useState("react");
  const [more, setMore] = useState(false);

  // Fetch Single Random Quote
  const fetchData = async () => {
    const res = await fetch(
      "https://quote-garden.herokuapp.com/api/v2/quotes/random"
    );
    const json = await res.json();
    const quote = json.quote;

    setMore(false);
    setData(quote);
  };

  // Fetch All Quotes by Author
  const fetchDataByAuthor = async (author) => {
    const res = await fetch(
      `https://quote-garden.herokuapp.com/api/v2/authors/${author}`
    );
    const json = await res.json();
    const quotes = json.quotes;

    setData(quotes);
    setMore(true);
  };

  // Fetch Single Data point on page load
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      width={["80%", "60%"]}
      mx="auto"
      fontFamily="Raleway"
      color="gray.800"
      position="relative"
      minHeight="100vh"
    >
      <Flex direction="column" width="100%">
        <Heading
          alignSelf="center"
          fontFamily="Raleway"
          mt={["4", "8"]}
          color="teal.200"
        >
          Random Quote Generator
        </Heading>
        <Box mt="6" alignSelf="flex-end" mb={["25%", "20%", "15%", "10%"]}>
          <Button
            rightIcon="repeat"
            variant="ghost"
            size="md"
            color="#FF893B"
            fontWeight="normal"
            onClick={fetchData}
            _hover={{
              background: "#FF893B",
              color: "white",
            }}
          >
            Random
          </Button>
        </Box>

        {/* Conditional Rendering */}
        {more === false ? (
          <OneQuote data={data} requestMore={fetchDataByAuthor} />
        ) : (
          <MultipleQuotes data={data} />
        )}
      </Flex>
    </Box>
  );
}

export default App;

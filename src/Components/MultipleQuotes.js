import React from "react";
import { Flex, Box, PseudoBox } from "@chakra-ui/core";

const MultipleQuotes = ({ data }) => {
  return (
    <Flex direction="column" width="100%" className="quotes-page">
      <Box
        fontSize={["lg", "xl", "2xl"]}
        fontWeight="bold"
        mb="5%"
        px="5"
        color="teal.200"
      >
        {data[0].quoteAuthor}
      </Box>
      {data.map((quote, i) => (
        <PseudoBox
          verticalAlign="middle"
          fontWeight="normal"
          fontSize={["lg", "xl", "2xl", "3xl"]}
          position="relative"
          _before={{
            content: `""`,
            position: "absolute",
            display: "block",
            left: "-5%",
            borderLeftWidth: "0.5rem",
            borderLeftColor: "#FF893B",
            height: "100%",
          }}
          px="5"
          lineHeight="tall"
          color="white"
          key={i}
          my={["4", "8"]}
        >
          {quote.quoteText}
        </PseudoBox>
      ))}
    </Flex>
  );
};

export default MultipleQuotes;

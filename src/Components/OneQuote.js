import React from "react";
import { Flex, PseudoBox } from "@chakra-ui/core";

const OneQuote = ({ data, requestMore }) => {
  return (
    <Flex direction="column" width="100%">
      <PseudoBox
        verticalAlign="middle"
        fontWeight="normal"
        fontSize={["lg", "xl", "2xl", "3xl"]}
        px="5"
        lineHeight="tall"
        position="relative"
        color="white"
        _before={{
          content: `""`,
          position: "absolute",
          display: "block",
          left: "-5%",
          borderLeftWidth: "0.5rem",
          borderLeftColor: "#FF893B",
          height: "100%",
        }}
      >
        {data.quoteText}
      </PseudoBox>
      <PseudoBox
        mt={["4", "8"]}
        fontWeight="bold"
        px="5"
        py="10"
        position="relative"
        cursor="pointer"
        color="teal.200"
        _hover={{
          background: "#FF893B",
          color: "white",
          "&:after": {
            content: '"\u2192"',
            position: "absolute",
            right: "5%",
            fontSize: "3rem",
            top: "0",
            height: "90%",
            display: "flex",
            alignItems: "center",
          },
        }}
        onClick={() => requestMore(data.quoteAuthor)}
      >
        <PseudoBox fontSize={["sm", "md", "lg", "xl"]}>
          {data.quoteAuthor}
        </PseudoBox>
        <PseudoBox
          fontWeight="normal"
          fontSize={["xs", "sm", "md"]}
          color="white"
        >
          {data.quoteGenre}
        </PseudoBox>
      </PseudoBox>
    </Flex>
  );
};

export default OneQuote;

import { EmptyState, VStack } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

export const EmptyResponse = () => {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <LuSearch />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>There are no such products</EmptyState.Title>
          <EmptyState.Description>
            Your search query did not return any results
          </EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};

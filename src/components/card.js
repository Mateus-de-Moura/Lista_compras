import React from 'react';
import { VStack, Box, Divider, HStack, Checkbox, Text } from 'native-base';

export default function Card({ data }) {
    return (
        <Box borderWidth={1} borderColor="gray.300" borderRadius={15} height={79}>
            <VStack space="4" divider={<Divider />} mt={5}>
                {data.map((item, index) => (
                    <Box key={index} px="4" pb="4">
                        <HStack space={3} justifyContent="space-between">
                            <Box mt={3} px={2}> 
                                <Checkbox value="test" accessibilityLabel={`Checkbox for ${item.Item}`} />
                            </Box>
                            <Box mr={200} mb={5}>
                                <VStack space={1}>
                                    <Text>{item.Item}</Text>
                                    <Text>{item.Quantidade}</Text>
                                </VStack>
                            </Box>
                            <Box mt={3}>
                                <VStack space={1}>
                                    <Text>{item.Categoria}</Text>
                                </VStack>
                            </Box>
                        </HStack>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
}

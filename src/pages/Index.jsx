import { useState } from "react";
import { Container, VStack, Text, Input, Button, Select, HStack, Box, IconButton } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [agents, setAgents] = useState([]);

  const handleSearch = () => {
    // Dummy data for agents
    const dummyAgents = [
      { name: "Agent 1", location: "Location 1" },
      { name: "Agent 2", location: "Location 2" },
      { name: "Agent 3", location: "Location 3" },
    ];
    setAgents(dummyAgents);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          RTO License Application
        </Text>
        <Select placeholder="Select State" value={state} onChange={(e) => setState(e.target.value)}>
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
          <option value="state3">State 3</option>
        </Select>
        <Select placeholder="Select District" value={district} onChange={(e) => setDistrict(e.target.value)}>
          <option value="district1">District 1</option>
          <option value="district2">District 2</option>
          <option value="district3">District 3</option>
        </Select>
        <Select placeholder="Select Taluka" value={taluka} onChange={(e) => setTaluka(e.target.value)}>
          <option value="taluka1">Taluka 1</option>
          <option value="taluka2">Taluka 2</option>
          <option value="taluka3">Taluka 3</option>
        </Select>
        <Select placeholder="Select License Type" value={licenseType} onChange={(e) => setLicenseType(e.target.value)}>
          <option value="twoWheeler">Two Wheeler</option>
          <option value="fourWheeler">Four Wheeler</option>
        </Select>
        <Button colorScheme="blue" onClick={handleSearch} leftIcon={<FaSearch />}>
          Search Agents
        </Button>
        <VStack spacing={4} width="100%">
          {agents.map((agent, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
              <HStack justifyContent="space-between">
                <Text>{agent.name}</Text>
                <Text>{agent.location}</Text>
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;

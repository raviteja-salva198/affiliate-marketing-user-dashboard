import styled from 'styled-components';

export const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 30px;
  font-size: 28px;
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const Th = styled.th`
  background-color: #4a90e2;
  color: white;
  padding: 15px;
  text-align: left;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
`;

export const Td = styled.td`
  background-color: #fff;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const ApproveButton = styled(Button)`
  background-color: #4caf50;
  color: white;
`;

export const RejectButton = styled(Button)`
  background-color: #f44336;
  color: white;
`;

export const StatusCell = styled(Td)`
  font-weight: bold;
  text-transform: capitalize;
`;

export const RejectionReason = styled.span`
  color: #f44336;
  font-style: italic;
`;
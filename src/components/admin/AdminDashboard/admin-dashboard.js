import React, { useState, useEffect } from 'react';
import {DashboardContainer , Title, Table, Th, Td, ApproveButton, RejectButton, StatusCell, RejectionReason} from './admin-dashboard-styles';


const AdminDashboard = () => {
  const [billingInfos, setBillingInfos] = useState([]);

  useEffect(() => {
    fetchBillingInfos();
  }, []);

  const fetchBillingInfos = () => {
    //Replace with API call
    const infos = JSON.parse(localStorage.getItem('billingInfos') || '[]');
    setBillingInfos(infos);
  };

  const handleApprove = (id) => {
    updateBillingInfoStatus(id, 'approved');
  };

  const handleReject = (id) => {
    const reason = prompt('Please enter the reason for rejection:');
    if (reason) {
      updateBillingInfoStatus(id, 'rejected', reason);
    }
  };

  const updateBillingInfoStatus = (id, status, reason = '') => {
    const updatedInfos = billingInfos.map(info =>
      info.id === id ? { ...info, status, rejectionReason: reason } : info
    );
    localStorage.setItem('billingInfos', JSON.stringify(updatedInfos));
    setBillingInfos(updatedInfos);
  };

  return (
    <DashboardContainer>
      <Title>Admin Dashboard</Title>
      <Table>
        <thead>
          <tr>
            <Th>PAN Card</Th>
            <Th>Bank Account</Th>
            <Th>IFSC Code</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {billingInfos.map((info) => (
            <tr key={info.id}>
              <Td>{info.panCard}</Td>
              <Td>{info.bankAccount}</Td>
              <Td>{info.ifscCode}</Td>
              <StatusCell>{info.status}</StatusCell>
              <Td>
                {info.status === 'pending' && (
                  <>
                    <ApproveButton onClick={() => handleApprove(info.id)}>Approve</ApproveButton>
                    <RejectButton onClick={() => handleReject(info.id)}>Reject</RejectButton>
                  </>
                )}
                {info.status === 'rejected' && <RejectionReason>Reason: {info.rejectionReason}</RejectionReason>}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </DashboardContainer>
  );
};

export default AdminDashboard;
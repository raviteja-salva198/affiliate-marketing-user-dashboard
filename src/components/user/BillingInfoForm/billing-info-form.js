import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {GlobalStyle , FormContainer, Title, Form, InputGroup, Label, Input, Button, ErrorMessage, SuccessMessage} from './billing-info-form-styles';

const BillingInfoForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [submitStatus, setSubmitStatus] = useState(null);

    const onSubmit = async (data) => {
        //Need to replace this with API call...
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const existingInfos = JSON.parse(localStorage.getItem('billingInfos') || '[]');
          
          const newInfo = {
            id: Date.now(),
            ...data,
            status: 'pending'
          };
          existingInfos.push(newInfo);
          
          localStorage.setItem('billingInfos', JSON.stringify(existingInfos));
          
          console.log("Submitted Successfully!!", newInfo);
          setSubmitStatus('success');
          reset();
        } catch (error) {
          console.error("Submission failed:", error);
          setSubmitStatus('error');
        }
      };

  const validatePAN = (value) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(value) || 'Invalid PAN card format';
  };

  return (
    <>
      <GlobalStyle />
      <FormContainer>
      <Title>Billing Information</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label htmlFor="panCard">PAN Card Number</Label>
          <Input
            id="panCard"
            {...register("panCard", { 
              required: 'PAN Card is required', 
              validate: validatePAN 
            })}
            placeholder="e.g., ABCDE1234F"
          />
          {errors.panCard && <ErrorMessage>{errors.panCard.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="bankAccount">Bank Account Number</Label>
          <Input
            id="bankAccount"
            type="number"
            {...register("bankAccount", { 
              required: 'Bank Account is required' 
            })}
            placeholder="e.g., 1234567890"
          />
          {errors.bankAccount && <ErrorMessage>{errors.bankAccount.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="ifscCode">IFSC Code</Label>
          <Input
            id="ifscCode"
            {...register("ifscCode", { 
              required: 'IFSC Code is required' 
            })}
            placeholder="e.g., ABCD0123456"
          />
          {errors.ifscCode && <ErrorMessage>{errors.ifscCode.message}</ErrorMessage>}
        </InputGroup>

        <Button type="submit">Submit</Button>
      </Form>

      {submitStatus === 'success' && (
        <SuccessMessage>
          Billing information submitted successfully. It will be verified shortly.
        </SuccessMessage>
      )}
      {submitStatus === 'error' && (
        <ErrorMessage>An error occurred. Please try again.</ErrorMessage>
      )}
    </FormContainer>
    
    </>
  );
};

export default BillingInfoForm;

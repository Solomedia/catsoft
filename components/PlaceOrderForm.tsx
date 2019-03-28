import { Formik, Field } from 'formik';
import { Flex, Box } from '@rebass/grid/emotion';
import { Row, Text, Button } from 'lib/ui';
import { css } from '@emotion/core';
import styled from 'lib/theme';

const PlaceOrderForm = () => {
  function validation() {
    const errors: any = {};

    return errors;
  }

  return (
    <Box mt={5}>
      <Flex>
        <LockIcon className="material-icons">lock</LockIcon>
        <Text color="#212B36" weight="300" fontSize={8}>
          Secure Credit Card Payment
        </Text>
      </Flex>
      <Formik
        initialValues={{
          card: '',
          card_number: '',
          expiration_date: '',
          cvc: '',
          name: '',
          email: '',
          phone: '',
          address: '',
          country: '',
          city: '',
          zip: '',
          createAccount: false,
          subscribe: false
        }}
        validate={() => validation()}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Row mt={8}>
              <Flex
                width={[1, 1 / 3]}
                px={2}
                flexDirection="column"
                justifyContent="flex-end"
              >
                <FieldBox>
                  <Field
                    type="text"
                    name="card"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.card}
                    required
                  />
                </FieldBox>
                {errors.card && touched.card && errors.card}
              </Flex>
              <Flex width={[1, 1 / 3]} px={2} flexDirection="column">
                <LabelStyled>Credit Card Number</LabelStyled>
                <FieldBox>
                  <Icon className="material-icons">credit_card</Icon>
                  <Field
                    type="text"
                    name="card_number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.card_number}
                    placeholder="16 digits in the front of your card"
                    maxLength="16"
                    required
                  />
                </FieldBox>
                {errors.card_number &&
                  touched.card_number &&
                  errors.card_number}
              </Flex>
              <Flex width={[1, 1 / 3]} px={2} flexDirection="column">
                <LabelStyled>Expiration date / Security code</LabelStyled>
                <FieldBox>
                  <Icon className="material-icons">credit_card</Icon>
                  <Field
                    type="text"
                    name="expiration_date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.expiration_date}
                    placeholder="MM / YY"
                    css={css`
                      max-width: 60px;
                    `}
                    maxLength="4"
                    required
                  />
                  <Field
                    type="text"
                    name="cvc"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cvc}
                    placeholder="CVC"
                    maxLength="3"
                    required
                  />
                </FieldBox>
                {errors.expiration_date &&
                  touched.expiration_date &&
                  errors.expiration_date}
              </Flex>
            </Row>
            <Text mt={10} color="#212B36" weight="300" fontSize={8}>
              Billing Address
            </Text>

            <Row mt={6}>
              <Flex
                width={[1, 1 / 3]}
                px={2}
                flexDirection="column"
                justifyContent="flex-end"
              >
                <FieldBox>
                  <Field
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Full Name"
                  />
                </FieldBox>
                {errors.name && touched.name && errors.name}
              </Flex>
              <Flex width={[1, 1 / 3]} px={2} flexDirection="column">
                <FieldBox>
                  <Field
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="E-Mail-Address"
                  />
                </FieldBox>
                {errors.email && touched.email && errors.email}
              </Flex>
              <Flex width={[1, 1 / 3]} px={2} flexDirection="column">
                <FieldBox>
                  <Field
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    placeholder="Telephone"
                  />
                </FieldBox>
                {errors.phone && touched.phone && errors.phone}
              </Flex>
            </Row>

            <Flex mt={1} width={1}>
              <FieldBox>
                <Field
                  type="text"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  placeholder="Address"
                />
              </FieldBox>
              {errors.address && touched.address && errors.address}
            </Flex>

            <Row mt={1}>
              <Flex
                width={[1, 1 / 3]}
                px={2}
                flexDirection="column"
                justifyContent="flex-end"
              >
                <FieldBox>
                  <Field
                    type="text"
                    name="country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                    placeholder="Country"
                  />
                </FieldBox>
                {errors.country && touched.country && errors.country}
              </Flex>
              <Flex width={[1, 1 / 3]} px={2} flexDirection="column">
                <FieldBox>
                  <Field
                    type="text"
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                    placeholder="City"
                  />
                </FieldBox>
                {errors.city && touched.city && errors.city}
              </Flex>
              <Flex width={[1, 1 / 3]} px={2} flexDirection="column">
                <FieldBox>
                  <Field
                    type="text"
                    name="zip"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.zip}
                    placeholder="Zip Code"
                  />
                </FieldBox>
                {errors.zip && touched.zip && errors.zip}
              </Flex>
            </Row>

            <Flex mt={8} justifyContent="space-between">
              <Flex>
                <Field
                  name="createAccount"
                  type="checkbox"
                  value="create account"
                />
                <Text ml={0} fontSize={0}>
                  Create my account
                </Text>
              </Flex>
              <Flex>
                <Field name="subscribe" type="checkbox" value="subscribe" />
                <Text ml={0} fontSize={0}>
                  Sign up to our newsletter and stay informed of the last trends
                  of Microsoft Software
                </Text>
              </Flex>
            </Flex>

            <SubmitBtn
              as="button"
              py="17px"
              type="submit"
              disabled={isSubmitting}
            >
              PLACE YOUR ORDER
            </SubmitBtn>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const LabelStyled = styled.label`
  color: #7f7f99;
  font-size: 12px;
  font-weight: 500;
`;

const FieldBox = styled(Flex)`
  label: FormGroup;
  height: 50px;
  background-color: #fff;
  border: 1px solid #c2cdd3;
  border-radius: 24px;
  overflow: hidden;
  padding: 0 22px;
  margin-top: 8px;
  width: 100%;
  input {
    display: flex;
    flex: 1;
    border: 0;
    font-size: 12px;
    font-weight: 500;
  }
`;

const Icon = styled.i`
  color: #000032;
  align-self: center;
  margin-right: 5px;
`;

const LockIcon = styled.i`
  color: #6d5cff;
  align-self: center;
  margin-right: 5px;
  font-size: 28px;
`;

const SubmitBtn: Box = styled(Button)`
  font-size: 14px;
  max-width: 370px;
  margin: 60px auto 0;
  width: 100%;
`;

export default PlaceOrderForm;

import { Formik, Field } from 'formik';
import { Flex, Box } from '@rebass/grid/emotion';
import { Row, Text, Button } from 'lib/ui';
import { css } from '@emotion/core';
import styled from 'lib/theme';
import { placeOrderWithPaymentInfo } from 'lib/services/cartsService';
import { guestCartIdKeyName } from 'lib/constants';

const PlaceOrderForm = ({ checkoutHandler }) => {
  function validation() {
    const errors: any = {};

    return errors;
  }

  return (
    <Box mt={5} id="placeOrderForm">
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
          fullName: '',
          email: '',
          telephone: '',
          address: '',
          country: '',
          city: '',
          postcode: '',
          createAccount: false,
          subscribe: false
        }}
        validate={() => validation()}
        onSubmit={(values, { setSubmitting }) => {
          const cartId = localStorage.getItem(guestCartIdKeyName);

          const body = {
            billingAddress: {
              region: values.city,
              region_id: 1,
              region_code: values.city,
              country_id: 'US',
              street: [values.address],
              telephone: values.telephone,
              postcode: values.postcode,
              city: values.city,
              firstname: values.fullName,
              lastname: 'n/a',
              email: values.email
            },
            email: values.email,
            paymentMethod: {
              method: 'checkmo'
            }
          };

          placeOrderWithPaymentInfo(cartId, body)
            .then(res => {
              localStorage.removeItem(guestCartIdKeyName);
              setSubmitting(false);
              checkoutHandler(res);
            })
            .catch(error =>
              console.log('placeOrderWithPaymentInfo service', error)
            );
        }}
      >
        {({
          values,
          errors,
          touched,
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
                  <Field type="text" name="card" value={values.card} required />
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
                    name="fullName"
                    value={values.fullName}
                    placeholder="Full Name"
                    required
                  />
                </FieldBox>
                {errors.fullName && touched.fullName && errors.fullName}
              </Flex>
              <Flex width={[1, 1 / 3]} px={2} flexDirection="column">
                <FieldBox>
                  <Field
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="E-Mail-Address"
                    required
                  />
                </FieldBox>
                {errors.email && touched.email && errors.email}
              </Flex>
              <Flex width={[1, 1 / 3]} px={2} flexDirection="column">
                <FieldBox>
                  <Field
                    type="text"
                    name="telephone"
                    value={values.telephone}
                    placeholder="Telephone"
                    required
                  />
                </FieldBox>
                {errors.telephone && touched.telephone && errors.telephone}
              </Flex>
            </Row>

            <Flex mt={1} width={1}>
              <FieldBox>
                <Field
                  type="text"
                  name="address"
                  value={values.address}
                  placeholder="Address"
                  required
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
                    value={values.country}
                    placeholder="Country"
                    required
                  />
                </FieldBox>
                {errors.country && touched.country && errors.country}
              </Flex>
              <Flex width={[1, 1 / 3]} px={2} flexDirection="column">
                <FieldBox>
                  <Field
                    type="text"
                    name="city"
                    value={values.city}
                    placeholder="City"
                    required
                  />
                </FieldBox>
                {errors.city && touched.city && errors.city}
              </Flex>
              <Flex width={[1, 1 / 3]} px={2} flexDirection="column">
                <FieldBox>
                  <Field
                    type="text"
                    name="postcode"
                    value={values.postcode}
                    placeholder="Zip Code"
                    required
                  />
                </FieldBox>
                {errors.postcode && touched.postcode && errors.postcode}
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

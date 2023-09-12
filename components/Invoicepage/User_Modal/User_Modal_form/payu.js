"use strict";
// From crypto-js
import md5 from 'crypto-js/md5';
import sha512 from 'crypto-js/sha512';
import { useEffect } from 'react';

// Function for quick access
// function $(selector) {
//   return document.querySelector(selector);
// }
function $$(selector) {
  return typeof window !== 'undefined' ? document.querySelector(selector) : null;
}

// Get below details from cookies
const campaign_id = 5;
const campaign_name = "Social Media 2023";

// Get below details from calculation
const amount = 1000;

// Get below details from form
const firstname = $('#first_name').value;
const lastname = $('#last_name').value;
const email = $('#email_id').value;
const phone = $('#phone_number').value;
const address_line_1 = $('#address_line_1').value;
const address_line_2 = $('#address_line_2').value;
const city = $('#city_name').value;
const state_element = $('#state_name');
const pincode = $('#pin_code').value;
const gstin = $('#gstin').value;

// Get below details from env
/*
const key = process.env.PAYU_MERCHANT_KEY;
const salt = process.env.PAYU_MERCHANT_SALT2;
const payu_url = process.env.PAYU_URL;
const site_url = process.env.SITE_URL;
*/

const key = "rAI8gg";
const salt = "MIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQDYOj+2W8ND8u00fYhV7ghwuBByDNJmDCIg7WzQE+SOBgOpARj7X8UOMr8idZCTbt+o898gObxNz8nNe4pBxLhJkMwaX3sHEgM9bDxkcOz7+RfZHnw41Bpair/1nTBaRBIgDNIzdPfOdxyET50oof/qrL9L4qpISXy/NiDSLgtOZcF6mev+zP+1FiklEXCu2IsqHVwyMMt7ynwS27t3m+ZliMKsPdXL5X0JrKD8TtchrNBzAphJctpQAjgNOL/+VUpHLQeQcks+0O1i/oXqiJ64akHumoGkFHRNaMdbmlUxgp7npmSjMnyCi9O3crcsZEFlyKSx0AwI3E7qgBu1Kz13AgMBAAECggEBAMJwVtywVb4jlESwYcoL29Eo47j7aLPVU1dSyZevW8aPB/mRABsD+tqSrafaGmFJwZxXeJys7nT2Vl0OK7yKnsGgkLlihOpNu1Yfn4setSy8yUI4FLKxoOUsggPnDxUMw1PI07jsBO7H03/za7qfOteX8gnWURPh6Wi0zvzR5N7gIIPVXj9xCHG6lgbr+bBQe5ranW7QUleDcVImpGtJUZAdI3fYmYQujePTWlyEc9nTUCdgA9lV7w27p5pnqzQfrJJq86P5RZHUNEw6GV5I0pw2hAPJQ1fIaB4vLEZhQ9Y3lExwznG8AC1gzu9U92PqhZRTM8U8jEpVXmHelHun5kECgYEA9UAEYYXvj5dqgS9xm71fb+nUvKsiv3KPWEWDvQWpgI6ITsUhoK7dGHURs/FmhoSKvuUVk1ebdao6ShKaMhRuZ4NmtoVqJOZ3rWzXomi3NjCEZ7h97SCPnMbz5QD/y+PK8+Rk0NvC44v9hQas9TORtNDAsLBm1Ck7DhQf4KIcL+ECgYEA4bSQ753fukoPlagGTVi+nSH6xS7f24PmWOq9OfYezmrxnaFoTFvQqhuI62sl0rnVJqQgexAcWMbweWjkkAaV1p1KJlsSvgMzPo+YPHtblrg0vKZTqi5V95XI9Wz3ps4shps0tOzUrS2UkMut29K3z2jc8q3ACa5NRyXoqJnV+FcCgYEAq8PmTZdMrTjTMx9TZkw/p1YR1QHXGFbX5m7pUV3B1XP+K40NfEh8OUDk4S5VLClwMzqm3cch7ksHABH/RMvid0Ukjvjp2mY/s4rji6/jgWSBl1MzfvyrGJaPAvisLtSftClmIpGH8W5+ZMjEIge4KPd7vUQPANDPt5CIsv9W1oECgYEAiL3VpWZXekyOXpP6pXejnB1PCZGZjCvALZSh6fDDvzkpgt+cCc8Cf1zJOh+jPaTaj1uWVhhvpBV68YNsHhnvQ6PtnYlFtJrJvBhRGit+VLTrNnPqcks6SBKWOqK283croK19ZDOrsfPQc10CyxBBzkXwvpInq3XPWdCMwUDaUmcCgYEAsiAOPU/0U3+zdHhzmUUTCIoQlm4gltNXmu1QuDruOdxDrhFNAVSkwhBD/IrwY6LRBOtAhk5oyakAZ1xw6GXZ24w1xH32DXoSWzYJSCFveFnwoSiLusvjn4isQls2FuFZR8uGuKg1+SZMOQ0EloGfgwfikP+Tu73HDMoPPsqQqqU=";
const payu_url = "https://test.payu.in/_payment";
const site_url = "staging.creatorsbay.app"

// Generate below data
const state_text = state_element.options[state_element.selectedIndex].text;
const transation_id = md5(campaign_id).toString();
const productinfo = `Campaign: ${campaign_name}`;
const surl = `https://${site_url}/payment-success`;
const furl = `https://${site_url}/payment-failure`;
const curl = `https://${site_url}/payment-cancelled`;
const udf1 = campaign_id;
const udf2 = gstin;
const udf3 = pincode;
const udf4 = '';
const udf5 = '';

const hash = sha512([
  key ?? '',
  transation_id ?? '',
  amount ?? '',
  productinfo ?? '',
  firstname ?? '',
  email ?? '',
  udf1 ?? '',
  udf2 ?? '',
  udf3 ?? '',
  udf4 ?? '',
  udf5 ?? '',
  '',
  '',
  '',
  '',
  '',
  salt ?? ''
].join('|')).toString()

// Get this as fixed values;
const country = "India";
const api_version = 1;

document.getElementById('submit_button').addEventListener('click', function () {
console.log("payment_form",payment_form);
  // Set PAYU URL
  document.getElementById('payment_form').setAttribute('action', payu_url);

  $('#key').value = key;
  $('#txnid').value = transation_id;
  $('#productinfo').value = productinfo;
  $('#amount').value = amount;
  $('#email').value = email;
  $('#firstname').value = firstname;
  $('#surl').value = surl;
  $('#furl').value = furl;
  $('#phone').value = phone;
  $('#hash').value = hash;

  $('#api_version').value = api_version;
  $('#lastname').value = lastname;
  $('#address1').value = address_line_1;
  $('#address2').value = address_line_2;
  $('#city').value = city;
  $('#state').value = state_text;
  $('#country').value = country;
  $('#pincode').value = pincode;
  $('#curl').value = curl;
  $('#udf1').value = udf1;
  $('#udf2').value = udf2;
  $('#udf3').value = udf3;
  $('#udf4').value = udf4;
  $('#udf5').value = udf5;
});

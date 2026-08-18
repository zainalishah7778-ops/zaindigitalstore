export const STORE_PHONE_DISPLAY = '+92 334 7221127';
export const STORE_PHONE_NUMBER = '923347221127';

/**
 * Generates an official WhatsApp click-to-chat URL
 * Message format requested by user:
 * "Hello Zain Digital Store, I want to order: [PRODUCT NAME]. Please send me payment and delivery details."
 */
export function getProductWhatsAppUrl(productName: string, customNote?: string): string {
  const baseMessage = `Hello Zain Digital Store, I want to order: ${productName}. Please send me payment and delivery details.${customNote ? ` Note: ${customNote}` : ''}`;
  const encodedText = encodeURIComponent(baseMessage);
  return `https://wa.me/${STORE_PHONE_NUMBER}?text=${encodedText}`;
}

export function getGeneralInquiryWhatsAppUrl(inquiryText?: string): string {
  const msg = inquiryText || 'Hello Zain Digital Store! I want to inquire about your digital subscriptions and software products.';
  return `https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
}

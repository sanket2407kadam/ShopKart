"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Mail, MapPin, Phone } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return <div className="page-shell content-page"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact us</span></div><div className="editorial-heading"><span className="eyebrow">WE’RE ALL EARS</span><h1>Let’s talk.</h1><p>A question, a thought, or just want to say hi? We’d love to hear from you.</p></div><div className="contact-layout"><form className="contact-form" onSubmit={submit}><h2>Send us a note</h2><label>Your name<input required name="name" placeholder="How should we call you?" /></label><label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label><label>What’s on your mind?<select name="topic"><option>Order & delivery</option><option>Returns & refunds</option><option>Product question</option><option>Something else</option></select></label><label>Your message<textarea required name="message" rows={5} placeholder="Tell us a little more…" /></label><button className="button button-primary" type="submit">{sent ? "Message received!" : "Send your message"}<Check size={16} /></button>{sent && <p className="form-success">Thanks for reaching out. We’ll be in touch soon.</p>}</form><aside className="contact-aside"><span className="eyebrow">THE HUMAN SIDE OF SHOPKART</span><h2>Real people.<br />Here to help.</h2><p>Our customer care team is here Monday to Saturday, 9am–6pm.</p><div><Mail size={18} /><span><b>Email us</b><small>hello@shopkart.example</small></span></div><div><Phone size={18} /><span><b>Give us a ring</b><small>1800 123 4567</small></span></div><div><MapPin size={18} /><span><b>Find us</b><small>Bengaluru, India</small></span></div></aside></div></div>;
}

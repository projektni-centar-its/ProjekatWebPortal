using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
//using System.Web.Mvc;
//using System.Web.
using ProjekatWebPortal.Models;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace ProjekatWebPortal.Helpers
{
    public static class DropDownList_Optgroup
    {
        public static string DropDownOpt<TModel, TValue>(this HtmlHelper<TModel> helper, Expression<Func<TModel, TValue>> expression, SelectList opcije,string name)
        {
            string povratak ="";

           var ime = helper
                    .ViewContext
                    .ViewData
                    .TemplateInfo
                    //.GetFullHtmlFieldName(ExpressionHelper.GetExpressionText(expression));
                    .GetFullHtmlFieldName(expression.ToString()); // ??

            List<string> Tekstualni = new List<string>();
            List<string> Slike = new List<string>();
            List<string> Ostali = new List<string>();
           

            foreach (var opcija in opcije)
            {
                if (opcija.Text == ".txt" || opcija.Text == ".pdf" || opcija.Text == ".docx" || opcija.Text == ".rtf")
                {
                    
                    if(!Tekstualni.Contains(opcija.Text))
                    Tekstualni.Add(opcija.Text.ToString());
                }
                else if (opcija.Value == ".jpg" || opcija.Value == ".png" || opcija.Value == ".gif")
                {
                    if(!Slike.Contains(opcija.Text))
                    Slike.Add(opcija.Text.ToString());
                }
                else
                    if(!Ostali.Contains(opcija.Text))
                    Ostali.Add(opcija.Text.ToString());
            }


            povratak += String.Format("<select  class='select2formati' multiple='multiple' name='formati'>");

            if(Tekstualni.Count > 0)
            {
                povratak += String.Format("<optgroup label='Tekstualni'>");

                foreach (string ekstenzijaTekst in Tekstualni)
                {
                    povratak += String.Format("<option value ='{0}'>{1}</option>", ekstenzijaTekst, ekstenzijaTekst);
                }

                povratak += String.Format("</optgroup>");
            }



            if (Slike.Count > 0)
            {
                povratak += String.Format("<optgroup label='Slike'>");

                foreach (string ekstenzijaSlike in Slike)
                {
                    povratak += String.Format("<option value='{0}'>{1}</option>", ekstenzijaSlike, ekstenzijaSlike);
                }

                povratak += String.Format("</optgroup>");
            }


            if (Ostali.Count > 0)
            {
                povratak += String.Format("<optgroup label='Ostali'>");

                foreach (string ekstenzijaOstalo in Ostali)
                {
                    povratak += String.Format("<option value='{0}'>{1}</option>", ekstenzijaOstalo, ekstenzijaOstalo);
                }

                povratak += String.Format("</optgroup>");                
            }

            povratak += String.Format("</select>");

            return povratak; 
        }
    }
}
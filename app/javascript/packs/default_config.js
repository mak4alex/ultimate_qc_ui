export default  `
function props() {
/// Product Title    /// product_name( {critical: true})  ///         /// patch_product_title
/// Brand in Title   /// brand(        {critical: false}) /// Exists  /// patch_find_brand_in_name
/// Number of Images /// images_count( {critical: true})  /// 3       /// count
}

function patch_product_title(etalon, product, result) {
  return { "et_val": "NONE", "pr_val": "NONE", "comp": true }
}

function patch_find_brand_in_name(etalon, product, result) {
  return { "et_val": "NONE", "pr_val": "NONE", "comp": true }
}

function count(etalon, product, result) {
  var et_val = 3
  var pr_val = product["images_count"] || 0

  return { "et_val": et_val, "pr_val": pr_val, "comp": pr_val >= et_val }
}

`
